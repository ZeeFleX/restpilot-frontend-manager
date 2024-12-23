import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';

export const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	cache: new InMemoryCache()
});
