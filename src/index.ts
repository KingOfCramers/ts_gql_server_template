// Set ENVs
import { resolve } from "path";
import dotenv from "dotenv";
const envi = process.env.NODE_ENV;
dotenv.config({ path: resolve(__dirname, `../.${envi}.env`) });

import "reflect-metadata";
import { connect } from "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { BookResolver, MagazineResolver } from "./resolvers";
import { populateDatabase } from "./util";

(async () => {
  // Connect to MongoDB
  await connect();
  console.log(`📊 Databases connected`);
  const schema = await buildSchema({
    resolvers: [BookResolver, MagazineResolver],
    emitSchemaFile: resolve(__dirname, "schema.gql"),
  });

  // If development, set database docs
  envi === "development" && (await populateDatabase());

  // Launch the server!
  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Server listens at URL
  const { url } = await server.listen();
  console.log(`🚀 Server ready, at ${url}`);
})();
