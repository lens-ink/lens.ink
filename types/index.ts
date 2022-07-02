export interface Meta {
  description?: string;
  logo?: string;
  ogImage?: string;
  ogUrl?: string;
  title?: string;
}

export type LensApp = {
  name: string;
  logo: any;
  color: string;
  link: (handle: string) => string;
};

export type Profile = {
  id: string;
  name: string;
  bio: string;
  followNftAddress: string;
  metadata: string;
  isDefault: boolean;
  handle: string;
  picture: {
    original: {
      url: string;
      mimeType: string | null;
    };
  };
  coverPicture: {
    original: {
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
};
