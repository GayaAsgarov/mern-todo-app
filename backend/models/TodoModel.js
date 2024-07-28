import mongoose from "mongoose";
import { TODO_PRIORITY } from "../utils/constants.js";

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    priority: {
      type: String,
      enum: Object.values(TODO_PRIORITY),
    },
    isDone: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
