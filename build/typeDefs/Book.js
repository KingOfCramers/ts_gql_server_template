"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var fields_1 = require("./shared/fields");
var Book = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Book {\n    title: String!\n    publicationDate: Date!\n    author: String!\n    pages: Int!\n    publisher: Publisher!\n    ", "\n  }\n\n  extend type Query {\n    books: [Book!]\n  }\n"], ["\n  type Book {\n    title: String!\n    publicationDate: Date!\n    author: String!\n    pages: Int!\n    publisher: Publisher!\n    ", "\n  }\n\n  extend type Query {\n    books: [Book!]\n  }\n"])), fields_1.sale);
exports.default = Book;
var templateObject_1;
