import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import path from "path";
import { connect } from "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import RecipeResolver from "./resolvers/recipe";

(async () => {
  // Connect to MongoDB
  await connect();
  console.log(`📊 Databases connected`);
  const schema = await buildSchema({
    resolvers: [RecipeResolver],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  // Launch the server!
  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready, at ${url}`);
})();
