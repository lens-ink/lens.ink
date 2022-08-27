import Head from "next/head";
import { NextSeo } from "next-seo";
import { Meta } from "types";
import Footer from "./Footer";
import WalletPanel from "./WalletPanel";

export interface LayoutProps {
  meta: Meta;
  children: React.ReactNode;
}

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="theme-color" content="#00501e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta?.description} />

        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href={meta?.logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={meta?.logo} />
      </Head>
      <NextSeo
        title={meta.title}
        description={meta?.description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: meta.ogUrl,
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: meta.ogImage ?? "",
              alt: "Lens.ink",
              type: "image/jpeg",
            },
          ],
          site_name: "Lens.ink",
        }}
        twitter={{
          handle: '@_lens.ink',
          site: meta.twitter,
          cardType: "summary_large_image",
        }}
      />
      <div className="bg-gradient-to-br from-lens via-purple-100 to-green-100 dark:from-black dark:via-black dark:to-gray-800 relative w-full min-h-screen flex flex-col items-center md:justify-center">
        {children}
        <Footer></Footer>
        <WalletPanel></WalletPanel>
      </div>
    </>
  );
};

export default Layout;
