import { Tarea } from "../interfaces/tarea.interface";
import { Schema, model } from "mongoose";

const TaskSchema = new Schema<Tarea>(
  {
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
  },
  { _id: false, timestamps: true, versionKey: false }
);

const UserModel = model("tasks", TaskSchema);

export default UserModel;
