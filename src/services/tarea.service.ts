import { Tarea } from "../interfaces/tarea.interface";
import tareaModel from "../models/tarea.model";

const allTasks = async () => {
  const responseTasks = await tareaModel.find({});
  return responseTasks;
};

const getOneTask = async (_id: string) => {
  const responseTask = await tareaModel.findOne({ _id });
  return responseTask;
};

const insertTask = async (tarea: Tarea) => {
  const responseCreateTask = await tareaModel.create(tarea);
  return responseCreateTask;
};

const _updateTask = async (_id: string, tarea: Tarea) => {
  const responseUpdateTask = await tareaModel.findOneAndUpdate({ _id }, tarea, {
    new: true,
  });
  return responseUpdateTask;
};

const _deleteTask = async (_id: string) => {
  const responseDeleteTask = await tareaModel.deleteOne({ _id });
  return responseDeleteTask;
};

export { getOneTask, allTasks, insertTask, _updateTask, _deleteTask };
