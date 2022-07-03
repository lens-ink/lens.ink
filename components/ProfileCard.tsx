/* eslint-disable @next/next/no-img-element */
import { Profile } from "../types";
import Image from "next/image";
import {
  linkifyBio,
  openseaUrl,
  parseId,
  polygonUrl,
  shortAddress,
} from "../utils";
import parse from "html-react-parser";

export interface ProfilePropss {
  profile: Profile;
}
const ProfileCard = ({ profile }: ProfilePropss) => {
  return (
    <>
      <div className="flex flex-col px-8 md:px-16">
        <div className="w-full flex flex-col md:flex-row items-start md:items-end">
          <img
            src={profile.picture.original?.url ?? profile.picture.uri}
            alt="avatar"
            className="w-40 h-40 object-cover"
          />
          <div className="ml-0 md:ml-4 mt-2 md:mt-0 flex flex-col items-start">
            <div className="text-3xl md:text-4xl uppercase text-lensDark font-light">
              {profile.handle}
            </div>
            <div className="mt-2 text-gray-500 ">
              <a
                target="_blank"
                href={openseaUrl(profile.id)}
                className="hover:text-lensDark"
                rel="noreferrer"
              >
                {parseId(profile.id)}
              </a>
              <a
                href={polygonUrl(profile.ownedBy)}
                target="_blank"
                className="ml-2 hover:text-lensDark"
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
          <h4 className="py-2 text-xl text-lensDark font-bold">
            {profile.name}
          </h4>
          <p>{parse(linkifyBio(profile.bio))}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
