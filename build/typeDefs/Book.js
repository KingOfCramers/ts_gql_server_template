"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const fields_1 = require("./shared/fields");
const Book = apollo_server_1.gql `
  type Book {
    title: String!
    publicationDate: Date!
    author: String!
    pages: Int!
    publisher: Publisher!
    ${fields_1.sale}
  }

  extend type Query {
    books: [Book!]
  }
`;
exports.default = Book;
//# sourceMappingURL=Book.js.map