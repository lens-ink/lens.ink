import Layout from "components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import { Meta } from "types";

const Home: NextPage = () => {
  const meta = {
    title: "Lens.ink",
    description: "Lens links",
    logo: "/favicon.png",
    ogImage: "",
    ogUrl: `https://lens.ink`,
  } as Meta;
  const exampleInks = [
    "lensprotocol.lens.ink",
    "stani.lens.ink",
    "bradorbradley.lens.ink",
    "yixin91069033.lens.ink",
    "juliettech.lens.ink",
  ];
  return (
    <Layout meta={meta}>
      <div className="h-full mt-32 text-lensDark tracking-wider">
        <span className="text-7xl font-light">L</span>
        <span className="text-3xl uppercase">ens.</span>
        <span className="text-7xl font-light">ink</span>
        <div className="mt-20 text-center flex flex-col gap-4">
          {exampleInks.map((link) => (
            <a
              href={`https://${link}`}
              key={link}
              className="no-underline text-lg  hover:underline"
            >
              {link}
            </a>
          ))}
          ...
        </div>
      </div>
    </Layout>
  );
};

export default Home;
