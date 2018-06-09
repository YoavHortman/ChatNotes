import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

export const client = new ApolloClient({
    link: new HttpLink({uri: "https://api.graph.cool/simple/v1/cji5xs8h03jev0167j4k31qf5"}),
    cache: new InMemoryCache(),
});