import dotenv from "dotenv";
dotenv.config();
import { connect } from "./mongodb/connect";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

(async () => {
  // Connect to MongoDB
  await connect();
  console.log(`📊 Databases connected`);

  // Launch the server!
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen();
  console.log(`🚀 Server ready, at ${url}`);
})();
