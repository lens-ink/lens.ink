import useSWR from "swr";

type TagListProps = {
  handle: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const TagList = ({ handle }: TagListProps) => {
  const { data, error } = useSWR(`/api/tags/${handle}`, fetcher);

  if (error) return <div></div>;
  if (!data) return <div></div>;
  console.log(data.keywords);

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
