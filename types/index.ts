export interface Meta {
  description?: string;
  logo?: string;
  ogImage?: string;
  ogUrl?: string;
  title?: string;
  twitter?: string;
}

export type LensApp = {
  name: string;
  logo: any;
  color: string;
  link: (handle: string) => string;
  url?: (handle: string) => string;
};

export type Profile = {
  id: string;
  name: string;
  bio?: string;
  followNftAddress: string;
  metadata: string;
  isDefault: boolean;
  handle: string;
  attributes: {
    displayType: string | null;
    traitType: string;
    key: "website" | "twitter" | "app";
    value: string;
  }[];
  picture?: {
    original?: {
      url: string;
      mimeType: string | null;
    };
    uri?: string;
  };
  coverPicture?: {
    original?: {
      url: string;
      mimeType: string | null;
    };
  };
  ownedBy: string;
  stats: {
    totalFollowers: number;
    totalFollowing: number;
    totalPosts: number;
    totalComments: number;
    totalMirrors: number;
    totalPublications: number;
    totalCollects: number;
  };
  followModule?: {
    type: "ProfileFollowModule" | "FeeFollowModule";
    amount?: {
      asset: {
        symbol: string;
        name: string;
        decimals: number;
        address: string;
      };
      value: string;
    };
    recipient?: string;
  };
  tags?: string[]
};

export interface FollowRequest {
  profile: string;
  followModule?: {
    feeFollowModule: {
      amount: {
        currency: string;
        value: string;
      };
    };
  };
}

export interface AuthToken {
  accessToken: string;
  refrehsToken: string;
}
