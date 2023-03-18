"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
}, { _id: false, timestamps: true, versionKey: false });
const UserModel = (0, mongoose_1.model)("tasks", TaskSchema);
exports.default = UserModel;
