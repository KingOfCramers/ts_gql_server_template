"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
// These types are shared across multiple
// Other types and are loaded first.
var SharedTypes = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Publisher {\n    location: String!\n    size: Int!\n  }\n"], ["\n  type Publisher {\n    location: String!\n    size: Int!\n  }\n"])));
exports.default = SharedTypes;
var templateObject_1;
