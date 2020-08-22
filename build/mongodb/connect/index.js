"use strict";
/* istanbul ignore file */
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
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// What type is db?
exports.connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Set password options if in development and mongoose logging
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepAlive: true,
        };
        // If in development, set username and password and mongoose debugger
        if (process.env.NODE_ENV === "development") {
            mongoose_1.default.set("debug", true);
            options.user = process.env.MONGODB_USER;
            options.pass = process.env.MONGODB_PASS;
        }
        // If in production, just connect to Atlas
        yield mongoose_1.default.connect(process.env.MONGODB_URI, options);
    }
    catch (err) {
        console.log("Could not connect to DB.");
        console.log(err);
        process.exit(1);
    }
    const db = mongoose_1.default.connection;
    db.on("error", (err) => {
        console.log("Error occured in MongoDB.", err);
    });
    db.on("disconnected", () => {
        console.log("Connection to MongoDB closed.");
    });
    return db;
});
//# sourceMappingURL=index.js.map