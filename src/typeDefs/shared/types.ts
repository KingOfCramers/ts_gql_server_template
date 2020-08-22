import { gql } from "apollo-server";

// These types are shared across multiple
// Other types and are loaded first.
export const SharedTypes = gql`
  type Publisher {
    location: String!
    size: Int!
  }
`;

export const SharedInputTypes = gql`
  input LibraryInput {
    startDate: String!
    endDate: String!
    filter: String
  }
`;
