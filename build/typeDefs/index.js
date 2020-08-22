"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer, gql } = require("apollo-server");
// Shared types
const types_1 = __importDefault(require("./shared/types"));
// Types
const Book_1 = __importDefault(require("./Book"));
const typeDefs = gql `
  # Import any scalars used inside our types...
  scalar Date

  # Load shared types...
  ${types_1.default}

  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;
// Export all the types for final construction
exports.default = [typeDefs, Book_1.default];
//# sourceMappingURL=index.js.map