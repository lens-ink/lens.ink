import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import { Meta, Profile } from "../../../types";
import { getProfile } from "../../../apollo/api";
import ProfileCard from "../../../components/ProfileCard";
import Layout from "../../../components/Layout";
import { lensApps } from "../../../utils";
import AppLink from "../../../components/AppLink";
import Luck from "../../../assets/luck.svg";
import Lucks from "../../../assets/lucks.svg";
import Head from "next/head";

interface IndexProps {
  stringifiedData: string;
}

interface PathProps extends ParsedUrlQuery {
  site: string;
}

const Index = ({ stringifiedData }: IndexProps) => {
  const data = JSON.parse(stringifiedData) as Profile;
  const meta = {
    title: data.name,
    description: data.name,
    logo: "/logo.png",
    ogImage: data.picture.original.url,
    ogUrl: `https://${data.name}.lens.ink`,
  } as Meta;

  const twitter = data.attributes.find((a) => a.key === "twitter")?.value;
  const website = data.attributes.find((a) => a.key === "website")?.value;

  return (
    <>
      <Layout meta={meta}>
        <div className="relative min-w-full md:min-w-1/3 mx-auto h-full md:h-auto pt-20 bg-lens">
          <div className="absolute -bottom-1 left-10">
            <Image src={Luck} width={80} height={80} alt="luck"></Image>
          </div>
          <div className="absolute -bottom-1 right-6">
            <Image src={Lucks} width={200} height={130} alt="lucks"></Image>
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
      </Layout>
    </>
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
  const res = await getProfile({
    handle: site !== "lensprotocol" ? site + ".lens" : site,
  });

  console.log({ res });
  const data = res.data.profile;

  if (!data) return { notFound: true, revalidate: 10 };

  return {
    props: {
      stringifiedData: JSON.stringify(data),
    },
    revalidate: 3600,
  };
};

export default Index;
