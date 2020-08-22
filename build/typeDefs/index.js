"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("apollo-server"), ApolloServer = _a.ApolloServer, gql = _a.gql;
// Shared types
var types_1 = __importDefault(require("./shared/types"));
// Types
var Book_1 = __importDefault(require("./Book"));
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  # Import any scalars used inside our types...\n  scalar Date\n\n  # Load shared types...\n  ", "\n\n  type Query {\n    _: String!\n  }\n\n  type Mutation {\n    _: String!\n  }\n"], ["\n  # Import any scalars used inside our types...\n  scalar Date\n\n  # Load shared types...\n  ", "\n\n  type Query {\n    _: String!\n  }\n\n  type Mutation {\n    _: String!\n  }\n"])), types_1.default);
// Export all the types for final construction
exports.default = [typeDefs, Book_1.default];
var templateObject_1;
