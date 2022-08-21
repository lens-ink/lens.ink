/* eslint-disable @next/next/no-img-element */
import { Profile } from "../types";
import {
  APP_URL,
  getAvatar,
  linkifyBio,
  openseaUrl,
  parseId,
  polygonUrl,
  shortAddress,
} from "../utils";
import parse from "html-react-parser";
import Image, { ImageLoaderProps } from "next/image";
import { TagList } from "./TagList";

export interface ProfilePropss {
  profile: Profile;
}
const ProfileCard = ({ profile }: ProfilePropss) => {
  const loader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${APP_URL}/_next/image?w=${width}&url=${encodeURIComponent(
      src
    )}&q=${quality || 75}`;
  };
  return (
    <>
      <div className="flex flex-col px-8 md:px-16">
        <div className="w-full flex flex-col md:flex-row items-start md:items-end">
          <Image
            loader={loader}
            src={getAvatar(profile)}
            alt="avatar"
            width={160}
            height={160}
            layout="fixed"
            placeholder="blur"
            unoptimized
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO88+d5PQAIuwNA/0Pe8QAAAABJRU5ErkJggg=="
            // className="object-cover"
          />
          <div className="ml-0 md:ml-4 mt-2 md:mt-0 flex flex-col items-start">
            <div className="text-3xl md:text-4xl uppercase text-lensDark dark:text-white font-light">
              {profile.handle}
            </div>
            <div className="mt-2 text-gray-500 ">
              <a
                target="_blank"
                href={openseaUrl(profile.id)}
                className="hover:text-lensDark text-mono"
                rel="noreferrer"
              >
                {parseId(profile.id)}
              </a>
              <a
                href={polygonUrl(profile.ownedBy)}
                target="_blank"
                className="ml-2 hover:text-lensDark text-mono"
                rel="noreferrer"
              >
                {shortAddress(profile.ownedBy)}
              </a>
            </div>
            <div>
              <span>
                <span className="font-bold">
                  {profile.stats.totalFollowers}
                </span>{" "}
                Followers
              </span>
              <span className="ml-2">
                <span className="font-bold">
                  {profile.stats.totalFollowing}
                </span>{" "}
                Following
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h4 className="py-2 text-xl text-lensDark dark:text-lens font-bold">
            {profile.name}
          </h4>
          <p>{parse(linkifyBio(profile.bio))}</p>
          <div className="mt-2">
            <TagList handle={profile.handle}></TagList>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
