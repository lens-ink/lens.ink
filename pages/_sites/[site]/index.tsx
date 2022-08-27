import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { Meta, Profile } from "../../../types";
import { getProfile } from "../../../apollo/profile";
import ProfileCard from "../../../components/ProfileCard";
import Layout from "../../../components/Layout";
import { getAvatar, isProduction, lensApps, LENS_ENDING } from "../../../utils";
import AppLink from "../../../components/AppLink";
import ButtonPanel from "components/ButtonPanel";
import { useEffect, useState } from "react";
import LuckSvg from "components/icons/LuckSvg";
import LucksSvg from "components/icons/LucksSvg";

const API_URL = process.env.API_URL;
interface IndexProps {
  stringifiedData: string;
}

interface PathProps extends ParsedUrlQuery {
  site: string;
}

const Index = ({ stringifiedData }: IndexProps) => {
  const data = JSON.parse(stringifiedData) as Profile;

  const twitter = data.attributes
    .find((a) => a.key === "twitter")
    ?.value.replace(/@/, "");
  const website = data.attributes.find((a) => a.key === "website")?.value;

  const avatar = getAvatar(data);

  const meta = {
    title: data.handle,
    description: data.bio,
    logo: "/favicon.png",
    ogImage: `https://lens.ink/api/image?imageUrl=${avatar}`,
    ogUrl: `https://${data.handle}.lens.ink`,
    twitter,
  } as Meta;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Layout meta={meta}>
      <div className="relative min-w-[100%] md:min-w-1/3 mx-auto h-full md:h-auto pt-10 md:pt-20 bg-lens dark:bg-gray-800 overflow-clip profile-card">
        <div className="absolute bottom-20 md:-bottom-1 left-10">
          <LuckSvg />
        </div>
        <div className="absolute bottom-20 md:-bottom-1 right-6">
          <LucksSvg />
        </div>
        <ProfileCard profile={data}></ProfileCard>
        <div className="mt-10 mb-52 z-10">
          {lensApps.map((app) => {
            if (app.name === "Twitter")
              return (
                twitter && (
                  <AppLink
                    lensApp={app}
                    handle={twitter}
                    key={app.name}
                  ></AppLink>
                )
              );
            if (app.name === "Website")
              return (
                website && (
                  <AppLink
                    lensApp={app}
                    handle={website}
                    key={app.name}
                  ></AppLink>
                )
              );

            return (
              <AppLink
                lensApp={app}
                handle={data.handle}
                key={app.name}
              ></AppLink>
            );
          })}
        </div>
      </div>
      <ButtonPanel profile={data}></ButtonPanel>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  return {
    paths: [
      {
        params: {
          site: "currentHost",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<IndexProps, PathProps> = async ({
  params,
}) => {
  if (!params) throw new Error("No path parameters found");
  const { site } = params;
  console.log(site);
  const handle =
    site === "lensprotocol" && isProduction ? site : site + LENS_ENDING;
  const res = await getProfile({
    handle,
  });

  const data = res.data.profile;

  if (!data) return { notFound: true, revalidate: 10 };

  let tags: string[] = [];
  try {
    const url = API_URL! + handle;
    const result = await fetch(url);
    tags = (await result.json()).keywords;
    console.log(tags);
  } catch (error) {
    console.log("fetch tags failed", error);
  }

  return {
    props: {
      stringifiedData: JSON.stringify({ ...data, tags }),
    },
    revalidate: 3600,
  };
};

export default Index;
