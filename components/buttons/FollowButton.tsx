import {
  createFollowTypedData,
  getFollowRequest,
  createUnfollowTypedData,
} from "apollo/follow";
import { WalletPanelContext } from "context/walletPanel";
import { useCallback, useContext, useEffect, useState } from "react";
import { Profile } from "types";
import { useAccount, useContract, useSigner, useSignTypedData } from "wagmi";
import { splitSignature } from "ethers/lib/utils";
import {
  LENS_FOLLOW_NFT_ABI,
  LENS_HUB_ABI,
  LENS_HUB_CONTRACT_ADDRESS,
} from "utils";
import Button from "./Buttons";
import LoadingIcon from "components/icons/LoadingIcon";
import { isFollowedByMe } from "apollo/profile";
import { signTypedData } from "@wagmi/core";
import { useHover } from "react-use";
import { ethers } from "ethers";

const FollowButton = ({ profile }: { profile: Profile }) => {
  const { state, dispatch } = useContext(WalletPanelContext);
  const { address } = useAccount();
  const [followed, setFollowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: signer } = useSigner();
  const { signTypedDataAsync } = useSignTypedData();

  const lensHub = useContract({
    addressOrName: LENS_HUB_CONTRACT_ADDRESS,
    contractInterface: LENS_HUB_ABI,
    signerOrProvider: signer,
  });

  useEffect(() => {
    const isFollowd = async () => {
      try {
        const res = await isFollowedByMe(profile.id);
        setFollowed(res.data.profile.isFollowedByMe);
      } catch (error) {
        console.log(error);
      }
    };
    if (!state.token || !address) return;
    isFollowd();
  }, [address, profile.id, state.token]);

  const follow = useCallback(async () => {
    if (!address || !state.show) {
      dispatch!({ type: "show" });
      return;
    }
    if (!state.profile || !state.token) return;

    setLoading(true);
    const followRequest = getFollowRequest(profile, state.profile.id);
    try {
      const res = await createFollowTypedData(followRequest);
      const typedData = res.data.createFollowTypedData.typedData;
      delete typedData.types.__typename;
      delete typedData.domain.__typename;
      delete typedData.value.__typename;
      console.log(typedData);
      const signature = await signTypedDataAsync(typedData);

      const { v, r, s } = splitSignature(signature);
      console.log(v, r, s);

      await lensHub.followWithSig({
        follower: address,
        profileIds: typedData.value.profileIds,
        datas: typedData.value.datas,
        sig: {
          v,
          r,
          s,
          deadline: typedData.value.deadline,
        },
      });
      dispatch!({
        type: "notification",
        payload: `followed ${profile.handle}`,
      });
    } catch (error) {
      console.log(error);
      if (
        error instanceof Error &&
        error.message.includes("User not authenticated")
      ) {
        dispatch!({ type: "token" });
        localStorage.removeItem("auth_token");
      }
    } finally {
      setLoading(false);
    }
  }, [
    address,
    dispatch,
    lensHub,
    profile,
    signTypedDataAsync,
    state.profile,
    state.show,
    state.token,
  ]);

  const unFollow = useCallback(async () => {
    if (!address || !state.show) {
      dispatch!({ type: "show" });
      return;
    }
    if (!state.profile || !state.token) return;

    setLoading(true);
    try {
      const res = await createUnfollowTypedData(profile.id);
      const typedData = res.data.createUnfollowTypedData.typedData;
      delete typedData.types.__typename;
      delete typedData.domain.__typename;
      delete typedData.value.__typename;
      console.log(typedData);

      const signature = await signTypedDataAsync(typedData);

      const followNftContract = new ethers.Contract(
        typedData.domain.verifyingContract,
        LENS_FOLLOW_NFT_ABI,
        signer!
      );
      const { v, r, s } = splitSignature(signature);
      console.log(v, r, s);
      await followNftContract.burnWithSig(typedData.value.tokenId, {
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      });
      dispatch!({
        type: "notification",
        payload: `unfollowed ${profile.handle}`,
      });
    } catch (error) {
      console.log(error);
      if (
        error instanceof Error &&
        error.message.includes("User not authenticated")
      ) {
        dispatch!({ type: "token" });
        localStorage.removeItem("auth_token");
      }
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    address,
    dispatch,
    profile.id,
    signer,
    state.profile,
    signTypedDataAsync,
    state.show,
    state.token,
  ]);

  function submit() {
    if (loading) return;
    if (followed) {
      unFollow();
    } else {
      follow();
    }
  }

  const element = (hovered: boolean) => (
    <div>{hovered ? "Unfollow" : "Following"}</div>
  );
  const [hoverable, hovered] = useHover(element);

  return (
    <>
      <Button onClick={() => submit()}>
        {loading ? <LoadingIcon /> : followed ? hoverable : "Follow"}
      </Button>
    </>
  );
};

export default FollowButton;
