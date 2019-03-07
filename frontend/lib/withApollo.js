import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { GRAPHQL_URI } from '../config/config';

export default withApollo(({ ctx, headers, initialState }) =>
  new ApolloClient({
    uri: GRAPHQL_URI,
    cache: new InMemoryCache().restore(initialState || {})
  }));
