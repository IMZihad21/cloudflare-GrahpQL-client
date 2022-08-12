import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://cgql.imzihad21.workers.dev/",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("accessToken") || "",
  },
});

export default apolloClient;
