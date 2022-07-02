import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({ uri: 'https://api.lens.dev/' });

export const apolloClient= new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
