import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { LENS_API } from "utils";

const httpLink = new HttpLink({ uri: LENS_API });
const authLink = new ApolloLink((operation, forward) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth_token");
    if (token) {
      const { accessToken } = JSON.parse(token);
      operation.setContext({
        headers: {
          "x-access-token": token ? `Bearer ${accessToken}` : "",
        },
      });
    }
  }

  return forward(operation);
});

export const apolloAuthClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
