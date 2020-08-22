"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `./.env.${process.env.NODE_ENV}` });
const connect_1 = require("./mongodb/connect");
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const apollo_server_1 = require("apollo-server");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Connect to MongoDB
    yield connect_1.connect();
    console.log(`📊 Databases connected`);
    // Launch the server!
    const server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
    const { url } = yield server.listen();
    console.log(`🚀 Server ready, at ${url}`);
}))();
//# sourceMappingURL=index.js.map