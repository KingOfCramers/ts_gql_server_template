"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidObjectId = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.isValidObjectId = function (id) { return mongoose_1.default.Types.ObjectId.isValid(id); };
