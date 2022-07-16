import { apolloAuthClient, apolloClient } from "./client";
import { gql } from "@apollo/client";
import { Profile } from "types";

const CREATE_FOLLOW_TYPED_DATA = `
  mutation($request: FollowRequest!) { 
    createFollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          FollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
 }
`;

const CREATE_UNFOLLOW_TYPED_DATA = `
  mutation($request: UnfollowRequest!) { 
    createUnfollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          BurnWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
 }
`;

const CREATE_PROFILE = `
  mutation($request: CreateProfileRequest!) { 
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
            __typename
    }
 }
`;

export const createFollowTypedData = (followRequestInfo: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_FOLLOW_TYPED_DATA),
    variables: {
      request: followRequestInfo,
    },
  });
};

export const createProfile = (createProfileRequest: any) => {
  console.log(createProfileRequest);
  return apolloAuthClient.mutate({
    mutation: gql(CREATE_PROFILE),
    variables: {
      request: createProfileRequest,
    },
  });
};

export const getFollowRequest = (profile: Profile, profileId: string) => {
  const followModule = profile.followModule;
  if (!followModule) {
    return {
      follow: [
        {
          profile: profile.id,
        },
      ],
    };
  }
  if (followModule.type === "ProfileFollowModule") {
    return {
      follow: [
        {
          profile: profile.id,
          followModule: {
            profileFollowModule: {
              profileId: profileId,
            },
          },
        },
      ],
    };
  }
  return {
    follow: [
      {
        profile: profile.id,
        followModule: {
          feeFollowModule: {
            amount: {
              currency: followModule.recipient,
              value: followModule.amount,
            },
          },
        },
      },
    ],
  };
};

export const createUnfollowTypedData = (profile: string) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_UNFOLLOW_TYPED_DATA),
    variables: {
      request: {
        profile,
      },
    },
  });
};
