import Layout from "components/Layout";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Meta } from "types";
import { exampleLinks, isProduction } from "utils";
import Luck from "../assets/luck.svg";

const Home: NextPage = () => {
  const meta: Meta = {
    title: "Lens ink",
    description: "Your lens profile is here",
    logo: "/favicon.png",
    ogImage: "https://lens.ink/banner.png",
    ogUrl: `https://lens.ink`,
    twitter: "@_lens.ink",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      handle: { value: string };
    };
    let handle = target.handle.value.trim();
    if (!handle) return;
    if (handle.endsWith(".lens")) handle = handle.replace(".lens", "");
    window.open(
      isProduction
        ? `https://${handle}.lens.ink`
        : `http://${handle}.localhost:3000`
    );
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
          or
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-row items-center  w-full mt-6"
        >
          <input
            type="text"
            id="handle"
            className="border bg-transparent border-gray-300 text-gray-900 text-sm  rounded-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="lenster.lens"
            required
          ></input>
          <button
            type="submit"
            className="ml-4 text-lensDark bg-green-300 hover:bg-green-500 focus:ring-2 rounded-sm focus:outline-none focus:ring-green-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Go
          </button>
        </form>
        <Luck className="mt-10 md:mt-20 h-36 inline" />
      </div>
    </Layout>
  );
};

export default Home;
