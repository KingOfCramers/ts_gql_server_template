import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import path from "path";
import { connect } from "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { BookResolver, MagazineResolver } from "./gql";
import { BookGoose } from "./gql/book/types";
import { populateDatabase } from "./util";

(async () => {
  // Connect to MongoDB
  await connect();
  console.log(`📊 Databases connected`);
  const schema = await buildSchema({
    resolvers: [BookResolver, MagazineResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  process.env.NODE_ENV === "development" && (await populateDatabase());

  // Launch the server!
  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready, at ${url}`);
})();
