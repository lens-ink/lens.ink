import useSWR from "swr";
import { isProduction } from "utils";

type TagListProps = {
  handle: string;
};

const fetcher = (url: string) =>
  fetch(url, { mode: "no-cors" }).then((res) => res.json());

export const TagList = ({ handle }: TagListProps) => {
  const url = isProduction
    ? `https://www.lens.ink/api/tags/${handle}`
    : `http://localhost:3000/api/tags/${handle}`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div></div>;
  if (!data?.keywords) return <div></div>;

  return (
    <div className="flex gap-2 flex-wrap max-w-3xl">
      {data.keywords.map((word: string) => (
        <div className="px-2 bg-purple-200 text-purple-500" key="word">
          {word}
        </div>
      ))}
    </div>
  );
};
