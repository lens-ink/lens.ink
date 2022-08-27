type TagListProps = {
  tags?: string[];
};

export const TagList = ({ tags }: TagListProps) => {
  if (!tags) return <> </>;
  return (
    <div className="flex gap-2 flex-wrap max-w-3xl">
      {tags.map((word: string) => (
        <div className="px-2 bg-purple-200 text-purple-500" key="word">
          {word}
        </div>
      ))}
    </div>
  );
};
