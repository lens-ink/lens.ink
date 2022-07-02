import Layout from "components/Layout";
import type { NextPage } from "next";
import { Meta } from "types";
import Image from "next/image";
import { exampleLinks } from "utils";
import Luck from "../assets/luck.svg";

const Home: NextPage = () => {
  const meta = {
    title: "lens.ink",
    description: "Lens links",
    logo: "/favicon.png",
    ogImage: "",
    ogUrl: `https://lens.ink`,
  } as Meta;

  return (
    <Layout meta={meta}>
      <div className="h-full mt-32 text-lensDark tracking-wider text-center">
        <span className="text-7xl font-light">L</span>
        <span className="text-3xl uppercase">ens.</span>
        <span className="text-7xl font-light">ink</span>
        <div className="mt-20 text-center flex flex-col gap-4">
          {exampleLinks.map((link) => (
            <a
              href={`${
                process.env.NODE_ENV === "production" ? "https" : "http"
              }://${link}`}
              key={link}
              className="no-underline text-lg  hover:underline"
            >
              {link}
            </a>
          ))}
          ...
        </div>
        <div className="mt-20">
          <Image src={Luck} width={140} height={140} alt="luck"></Image>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
