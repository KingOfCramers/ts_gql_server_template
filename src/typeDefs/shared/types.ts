import { gql } from "apollo-server";

// These types are shared across multiple
// Other types and are loaded first.
const SharedTypes = gql`
  type Publisher {
    location: String!
    size: Int!
  }
`;

export default SharedTypes;
