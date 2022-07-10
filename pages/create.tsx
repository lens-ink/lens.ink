import Layout from "components/Layout";
import type { NextPage } from "next";
import { WalletPanelAction, WalletPanelContext } from "context/walletPanel";
import { useContext, useState } from "react";
import { useAccount } from "wagmi";
import { createProfile } from "apollo/follow";
import { signMessage } from "@wagmi/core";
import { generateChallenge, authenticate } from "apollo/login";
import { AuthToken } from "types";

const CreatePage: NextPage = () => {
  const { dispatch } = useContext(WalletPanelContext);
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!address) {
      dispatch!({ type: "show" });
      return;
    }
    const target = e.target as typeof e.target & {
      handle: { value: string };
    };
    const handle = target.handle.value;
    console.log(handle);

    if (!handle) return;

    const request = {
      handle,
      profilePictureUri: null,
      followNFTURI: null,
      followModule: null,
    };
    const res = await createProfile(request);
    console.log(res);
  }

  return (
    <Layout>
      <div className="h-full mt-32 text-lensDark tracking-wider text-center w-80">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-row items-center  w-full"
        >
          <input
            type="text"
            id="handle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input handle"
            required
          ></input>
          <button
            type="submit"
            className="ml-4 text-stone-50 bg-green-500 hover:bg-lensDark focus:ring-4 rounded-sm focus:outline-none focus:ring-green-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            <span className="text-stone-50">Create</span>
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePage;
