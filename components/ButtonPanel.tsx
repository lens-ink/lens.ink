import { Profile } from "types";

import FollowButton from "./buttons/FollowButton";
import ShareButton from "./buttons/ShareButton";
import ExportButton from "./buttons/ExportButton";

const ButtonPanel = ({ profile }: { profile: Profile }) => {
  return (
    <section className="bg-lens dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent w-full md:w-auto px-4 py-4 md:mx-0 flex flex-row gap-4 justify-between">
      <FollowButton profile={profile}></FollowButton>
      <ShareButton profile={profile}></ShareButton>
      <ExportButton profile={profile}></ExportButton>
    </section>
  );
};

export default ButtonPanel;
