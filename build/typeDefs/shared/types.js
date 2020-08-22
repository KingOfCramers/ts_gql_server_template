"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
// These types are shared across multiple
// Other types and are loaded first.
const SharedTypes = apollo_server_1.gql `
  type Publisher {
    location: String!
    size: Int!
  }
`;
exports.default = SharedTypes;
//# sourceMappingURL=types.js.map