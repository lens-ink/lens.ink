import { createFollowTypedData, getFollowRequest } from "apollo/follow";
import { WalletPanelContext } from "context/walletPanel";
import { useCallback, useContext, useEffect, useState } from "react";
import { Profile } from "types";
import { useAccount, useContract, useSigner } from "wagmi";
import { splitSignature } from "ethers/lib/utils";
import { LENS_HUB_ABI, LENS_HUB_CONTRACT_ADDRESS } from "utils";
import Button from "./Buttons";
import LoadingIcon from "components/icons/LoadingIcon";
import { isFollowedByMe } from "apollo/profile";
import { signTypedData } from "@wagmi/core";

const FollowButton = ({ profile }: { profile: Profile }) => {
  const { state, dispatch } = useContext(WalletPanelContext);
  const { address } = useAccount();
  const [followed, setFollowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: signer } = useSigner();
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
      const signature = await signTypedData(typedData);

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
    state.profile,
    state.show,
    state.token,
  ]);

  return (
    <>
      <Button onClick={() => follow()}>
        {loading ? (
          <LoadingIcon className="stroke-lensDark text-lensDark" />
        ) : followed ? (
          "Following"
        ) : (
          "Follow"
        )}
      </Button>
    </>
  );
};

export default FollowButton;
