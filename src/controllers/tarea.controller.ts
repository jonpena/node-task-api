import { Request, Response, RequestHandler } from "express";
import { handleHttp } from "../utils/error.handler";
import {
  getOneTask,
  allTasks,
  insertTask,
  _updateTask,
  _deleteTask,
} from "../services/tarea.service";

const getTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getOneTask(id);
    const data = response ? response : "NOT_FOUND_TASK";
    res.send(data);
  } catch (error) {
    handleHttp("ERROR_GETTING_PERSON", res, error);
  }
};

const getTasks = async (_: Request, res: Response) => {
  try {
    const response = await allTasks();
    res.send(response);
  } catch (error) {
    handleHttp("ERROR_GETTING_TASKS", res, error);
  }
};

const createTask = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertTask(body);
    res.send(responseItem);
    console.log("creating a new Task");
  } catch (error) {
    handleHttp("ERROR_CREATING_TASK", res, error);
  }
};

const updateTask = async ({ params, body }: Request, res: Response) => {
  try {
    const response = await _updateTask(params.id, body);
    res.send(response);
    console.log("updating a Task");
  } catch (error) {
    handleHttp("ERROR_UPDATING_TASK", res, error);
  }
};

const deleteTask = async ({ params }: Request, res: Response) => {
  try {
    const responseItem = await _deleteTask(params.id);
    res.send(responseItem);
    console.log("deleting a Task");
  } catch (error) {
    handleHttp("ERROR_DELETING_TASK", res, error);
  }
};

export { getTask, getTasks, createTask, updateTask, deleteTask };
