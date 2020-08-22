import { gql } from "apollo-server";
import { sale } from "./shared/fields";

const Magazine = gql`

  type Magazine {
    title: String!
    publicationDate: Date!
    pages: Int!
    publisher: Publisher!
    ${sale}
  }

  extend type Query {
    magazines(input: LibraryInput!): [Magazine!]
  }
`;

export default Magazine;
