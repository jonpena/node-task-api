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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = exports.getTask = void 0;
const error_handler_1 = require("../utils/error.handler");
const tarea_service_1 = require("../services/tarea.service");
const getTask = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, tarea_service_1.getOneTask)(id);
        const data = response ? response : "NOT_FOUND_TASK";
        res.send(data);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)("ERROR_GETTING_PERSON", res, error);
    }
});
exports.getTask = getTask;
const getTasks = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, tarea_service_1.allTasks)();
        res.send(response);
    }
    catch (error) {
        (0, error_handler_1.handleHttp)("ERROR_GETTING_TASKS", res, error);
    }
});
exports.getTasks = getTasks;
const createTask = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield (0, tarea_service_1.insertTask)(body);
        res.send(responseItem);
        console.log("creating a new Task");
    }
    catch (error) {
        (0, error_handler_1.handleHttp)("ERROR_CREATING_TASK", res, error);
    }
});
exports.createTask = createTask;
const updateTask = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, tarea_service_1._updateTask)(params.id, body);
        res.send(response);
        console.log("updating a Task");
    }
    catch (error) {
        (0, error_handler_1.handleHttp)("ERROR_UPDATING_TASK", res, error);
    }
});
exports.updateTask = updateTask;
const deleteTask = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield (0, tarea_service_1._deleteTask)(params.id);
        res.send(responseItem);
        console.log("deleting a Task");
    }
    catch (error) {
        (0, error_handler_1.handleHttp)("ERROR_DELETING_TASK", res, error);
    }
});
exports.deleteTask = deleteTask;
