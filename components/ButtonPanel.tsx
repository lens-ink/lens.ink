import { Profile } from "types";

import FollowButton from "./buttons/FollowButton";
import { useRouter } from "next/router";
import ShareButton from "./buttons/ShareButton";
import ExportButton from "./buttons/ExportButton";

const ButtonPanel = ({ profile }: { profile: Profile }) => {
  const router = useRouter();
  return (
    <section className="flex flex-row gap-4 -mt-24 md:mt-4 justify-between">
      <FollowButton profile={profile}></FollowButton>
      <ShareButton profile={profile}></ShareButton>
      <ExportButton profile={profile}></ExportButton>
    </section>
  );
};

export default ButtonPanel;
