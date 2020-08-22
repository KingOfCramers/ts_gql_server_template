"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.houseCommittee = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var moment_1 = __importDefault(require("moment"));
var mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
var houseCommitteeSchema = new mongoose_1.Schema({
    committee: {
        type: String,
        required: [true, "A valid house committee is required."],
        enum: [
            "hasc",
            "hfac",
            "hjud",
            "hrle",
            "hvac",
            "hhsc",
            "hagc",
            "hapc",
            "hbuc",
            "help",
            "nrgy",
            "fisv",
            "admn",
            "ntty",
            "ovst",
            "scnc",
            "smbs",
            "trns",
            "wymn",
            "clmt",
        ],
    },
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    location: {
        type: String,
        required: false,
    },
    time: {
        type: Date,
        require: false,
    },
    text: {
        type: String,
        require: false,
    },
});
// Convert dates + times
houseCommitteeSchema
    .path("date")
    .get(function (v) { return (moment_1.default(v).isValid() ? moment_1.default(v).format("LL") : null); });
houseCommitteeSchema
    .path("time")
    .get(function (v) { return (moment_1.default(v).isValid() ? moment_1.default(v).format("LT") : null); });
// Pagination plugin
houseCommitteeSchema.plugin(mongoose_paginate_v2_1.default);
// Make model and export
var houseCommittee = mongoose_1.default.model("houseCommittee", houseCommitteeSchema);
exports.houseCommittee = houseCommittee;
