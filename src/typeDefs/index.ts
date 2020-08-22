import { gql } from "apollo-server";

// Shared types
import { SharedTypes, SharedInputTypes } from "./shared/types";

// Types
import Book from "./Book";
import Magazine from "./Magazine";

const typeDefs = gql`
  # Import any scalars used inside our types...
  scalar Date

  # Load shared types...
  ${SharedTypes}

  # Load shared input types...
  ${SharedInputTypes}

  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;

// Export all the types for final construction
export default [typeDefs, Book, Magazine];
