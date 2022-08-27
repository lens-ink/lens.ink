import Head from "next/head";
import { Meta } from "types";
import Footer from "./Footer";
import WalletPanel from "./WalletPanel";

export interface LayoutProps {
  meta?: Meta;
  children: React.ReactNode;
}

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href={meta?.logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={meta?.logo} />
        <meta name="theme-color" content="#00501e" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta itemProp="name" content={meta?.title} />
        <meta itemProp="description" content={meta?.description} />
        <meta itemProp="image" content={meta?.ogImage} />
        <meta name="description" content={meta?.description} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:url" content={meta?.ogUrl} />
        <meta property="og:image" content={meta?.ogImage} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta?.twitter} />
        <meta name="twitter:creator" content="@_lensink" />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content={meta?.ogImage} />
      </Head>
      <div className="bg-gradient-to-br from-lens via-purple-100 to-green-100 dark:from-black dark:via-black dark:to-gray-800 relative w-full h-screen  flex flex-col items-center md:justify-center">
        {children}
        <Footer></Footer>
        <WalletPanel></WalletPanel>
      </div>
    </>
  );
};

export default Layout;
