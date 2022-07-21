import { ApolloClient, InMemoryCache } from '@apollo/client';



 export const client = new ApolloClient({
    uri: 'http://localhost/AppOneWordpress/graphql',
  cache: new InMemoryCache()
});

