const { ApolloServer, gql } = require("apollo-server");

// Shared types
import SharedTypes from "./shared/types";

// Types
import Book from "./Book";

const typeDefs = gql`
  # Import any scalars used inside our types...
  scalar Date

  # Load shared types...
  ${SharedTypes}

  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;

// Export all the types for final construction
export default [typeDefs, Book];
