import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Meta, Profile } from "../../../types";

interface IndexProps {
  stringifiedData: string;
}

interface PathProps extends ParsedUrlQuery {
  site: string;
}

export default function Index({ stringifiedData }: IndexProps) {
  const data = JSON.parse(stringifiedData) as Profile;
  const meta = {
    title: data.name,
    description: data.name,
    logo: "/logo.png",
    ogImage: data.image,
    ogUrl: `https://${data.name}.lens.ink`,
  } as Meta;

  return <>{data.name}</>;
}

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

  const data = {
    name: site,
    image: "",
  };

  if (!data) return { notFound: true, revalidate: 10 };

  return {
    props: {
      stringifiedData: JSON.stringify(data),
    },
    revalidate: 3600,
  };
};
