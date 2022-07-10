import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { AuthToken, Profile } from "types";
import { useAccount } from "wagmi";

type WalletPanelState = {
  show?: boolean;
  error?: string;
  notification?: string;
  token?: AuthToken;
  profile?: Profile;
};

export interface WalletPanelAction {
  type:
    | "show"
    | "hide"
    | "error"
    | "notification"
    | "token"
    | "profile"
    | "clear";
  payload?: unknown;
}

export const WalletPanelContext = createContext<{
  state: WalletPanelState;
  dispatch?: Dispatch<WalletPanelAction>;
}>({ state: { show: false } });

function walletPanelReducer(
  state: WalletPanelState,
  action: WalletPanelAction
) {
  console.log("Wallet Panel Action: ", action);
  switch (action.type) {
    case "show": {
      return { ...state, show: true };
    }
    case "hide": {
      return { ...state, show: false };
    }
    case "token": {
      return { ...state, token: action.payload as AuthToken };
    }
    case "profile": {
      return { ...state, profile: action.payload as Profile };
    }
    case "notification": {
      return { ...state, notification: action.payload as string };
    }
    case "error": {
      return { ...state, error: action.payload as string };
    }
    case "clear":
      return { show: false, token: state.token };
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function WalletPanelProvider({ children }: { children: ReactNode }) {
  const { address } = useAccount();
  const [state, dispatch] = useReducer(walletPanelReducer, { show: !!address });

  const value = { state, dispatch };
  return (
    <WalletPanelContext.Provider value={value}>
      {children}
    </WalletPanelContext.Provider>
  );
}

export { WalletPanelProvider };
