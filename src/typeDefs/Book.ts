import { gql } from "apollo-server";
import { sale } from "./shared/fields";

const Book = gql`
  type Book {
    title: String!
    publicationDate: Date!
    author: String!
    pages: Int!
    publisher: Publisher!
    ${sale}
  }

  extend type Query {
    books: [Book!]
  }
`;

export default Book;
