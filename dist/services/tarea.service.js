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
exports._deleteTask = exports._updateTask = exports.insertTask = exports.allTasks = exports.getOneTask = void 0;
const tarea_model_1 = __importDefault(require("../models/tarea.model"));
const allTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseTasks = yield tarea_model_1.default.find({});
    return responseTasks;
});
exports.allTasks = allTasks;
const getOneTask = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseTask = yield tarea_model_1.default.findOne({ _id });
    return responseTask;
});
exports.getOneTask = getOneTask;
const insertTask = (tarea) => __awaiter(void 0, void 0, void 0, function* () {
    const responseCreateTask = yield tarea_model_1.default.create(tarea);
    return responseCreateTask;
});
exports.insertTask = insertTask;
const _updateTask = (_id, tarea) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdateTask = yield tarea_model_1.default.findOneAndUpdate({ _id }, tarea, {
        new: true,
    });
    return responseUpdateTask;
});
exports._updateTask = _updateTask;
const _deleteTask = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseDeleteTask = yield tarea_model_1.default.remove({ _id });
    return responseDeleteTask;
});
exports._deleteTask = _deleteTask;
