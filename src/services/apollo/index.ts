/* eslint-disable import/prefer-default-export */
import { ApolloClient, InMemoryCache } from '@apollo/client';

const realClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export { realClient };
