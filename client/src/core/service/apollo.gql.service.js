import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import fetch from "node-fetch";
import { toast } from "react-toastify";
import { projectData } from "../../Data/data";

const link = projectData.graphqlServerLocal;
const httpLink = createHttpLink({
  uri: link,
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("employeeToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err?.extensions?.exception?.response?.statusCode) {
        case 401:
          // TODO: Fix toast message, it's not showing without setTimeout
          toast.error(err?.message);
          window.location.href = "/auth/login";
          break;
        default:
          break;
      }
    }
  }

  if (networkError) {
    //  TODO: Handle network error once server is ready
  }
});

const ApolloGqlClient = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default ApolloGqlClient;
