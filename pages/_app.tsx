import "../styles/globals.css";
import type { AppProps } from "next/app";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import {
  configureChains,
  createClient,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { WalletPanelProvider } from "context/walletPanel";
import WalletPanel from "components/WalletPanel";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

function MyApp({ Component, pageProps }: AppProps) {
  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector(),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  });

  return (
    <>
      <WagmiConfig client={client}>
        <WalletPanelProvider>
          <Component {...pageProps} />
        </WalletPanelProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
