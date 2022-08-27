/* eslint-disable @next/next/no-img-element */
import { getAvatar, shortAddress } from "utils";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { XCircle } from "lucide-react";
import { useCallback, useContext, useEffect } from "react";
import LoadingIcon from "./icons/LoadingIcon";
import { WalletPanelContext } from "context/walletPanel";
import SvgIcon from "./icons/SvgIcon";
import { getProfiles } from "apollo/profile";
import { signMessage } from "@wagmi/core";
import { generateChallenge, authenticate } from "apollo/login";
import { AuthToken } from "types";

export interface WalletPanelProps {
  show: boolean;
}

const WalletPanel = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const { state, dispatch } = useContext(WalletPanelContext);

  const disconnectWallet = () => {
    dispatch!({ type: "clear" });
    disconnect();
  };

  useEffect(() => {
    if (!address && !isLoading && state.show) {
      const timeoutId = setTimeout(() => dispatch!({ type: "hide" }), 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [address, dispatch, isLoading, state]);

  useEffect(() => {
    const fetchProfile = async (address: string) => {
      const res = await getProfiles(address);
      const profile = res.data.profiles.items[0];
      dispatch!({ type: "profile", payload: profile });
    };
    if (!address) return;
    fetchProfile(address);
  }, [address, dispatch]);

  const connectWallet = useCallback(
    async (address: string, authing?: boolean) => {
      authing = true;
      const token = localStorage.getItem("auth_token");
      if (token) {
        dispatch!({ type: "token", payload: JSON.parse(token) });
        authing = false;
        return;
      }
      try {
        const challengeResponse = await generateChallenge(address);
        const authSignature = await signMessage({
          message: challengeResponse.data.challenge.text,
        });
        console.log(authSignature);
        const accessTokens = await authenticate(address, authSignature);
        const token = accessTokens.data.authenticate as AuthToken;
        localStorage.setItem("auth_token", JSON.stringify(token));
        dispatch!({ type: "token", payload: token });
      } catch (error) {
        console.log(error);
        dispatch!({ type: "notification", payload: error });
      } finally {
        authing = false;
      }
    },
    [dispatch]
  );

  useEffect(() => {
    let authing;
    if (state.token || authing || !address) return;
    connectWallet(address, authing);
  }, [address, connectWallet, dispatch, state.token]);

  const walletConnect = connectors.map(
    (connector) =>
      connector.ready && (
        <button
          disabled={!connector.ready}
          key={connector.id}
          className="mx-auto group flex items-center px-6 transition duration-300"
          onClick={() => {
            connect({ connector });
          }}
        >
          <SvgIcon name={connector.name} className="w-6 h-6" />
          <span className="ml-2 text-lg">{connector.name}</span>
          {isLoading && connector.id === pendingConnector?.id && (
            <LoadingIcon className="ml-2"></LoadingIcon>
          )}
        </button>
      )
  );

  return (
    <div
      className={`fixed z-30 transition-all duration-200 ease-in-out ${
        state.show ? "top-8" : "-top-20"
      }`}
    >
      <div className="p-4 text-center bg-green-200 rounded-full flex flex-row items-center gap-4">
        {address ? (
          <>
            <img
              src={getAvatar(state.profile, address)}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <span className="h-[40] font-mono text-lg text-black">
                {state.profile?.handle ?? shortAddress(address)}
              </span>
              <br />
              {state.notification && <span>{state.notification}</span>}
            </div>
            {!state.token && (
              <button onClick={() => connectWallet(address)}>Auth</button>
            )}
            <button onClick={() => disconnectWallet()} className="ml-2">
              <XCircle color="black"></XCircle>
            </button>
          </>
        ) : (
          walletConnect
        )}
      </div>
    </div>
  );
};

export default WalletPanel;
