import { createFollowTypedData } from "apollo/follow";
import { WalletPanelContext } from "context/walletPanel";
import { useCallback, useContext, useEffect, useState } from "react";
import { Profile } from "types";
import { useAccount, useSigner } from "wagmi";
import { signTypedData } from "@wagmi/core";
import { splitSignature } from "ethers/lib/utils";
import { Contract } from "ethers";
import { LENS_HUB_ABI, LENS_HUB_CONTRACT_ADDRESS } from "utils";
import Button from "./Buttons";
import LoadingIcon from "components/icons/LoadingIcon";
import { isFollowedByMe } from "apollo/profile";

const FollowButton = ({ profile }: { profile: Profile }) => {
  const { state, dispatch } = useContext(WalletPanelContext);
  const { address } = useAccount();
  const [followed, setFollowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: signer, isError, isLoading } = useSigner();

  useEffect(() => {
    const isFollowd = async () => {
      try {
        const res = await isFollowedByMe(profile.id);
        setFollowed(res.data.profile.isFollowdByMe);
      } catch (error) {}
    };
    if (!state.token || !address) return;
    isFollowd();
  }, [address, profile.id, state.token]);

  async function follow() {
    if (!address || !state.show) {
      dispatch!({ type: "show" });
      return;
    }
    if (!state.profile || !state.token) return;

    setLoading(true);
    const followModule = profile.followModule;

    let followRequest;
    if (!followModule) {
      followRequest = {
        follow: [
          {
            profile: profile.id,
          },
        ],
      };
    } else if (followModule.type === "ProfileFollowModule") {
      followRequest = {
        follow: [
          {
            profile: profile.id,
            followModule: {
              profileFollowModule: {
                profileId: state.profile.id,
              },
            },
          },
        ],
      };
    } else {
      followRequest = {
        follow: [
          {
            profile: profile.id,
            followModule: {
              feeFollowModule: {
                amount: {
                  currency: followModule.recipient,
                  value: followModule.amount,
                },
              },
            },
          },
        ],
      };
    }
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

      const lensHub = new Contract(
        LENS_HUB_CONTRACT_ADDRESS,
        LENS_HUB_ABI,
        signer!
      );

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
    } finally {
      setLoading(false);
    }
  }

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
