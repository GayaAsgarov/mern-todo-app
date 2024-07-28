import Todo from "../models/TodoModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.status(StatusCodes.OK).json({ todos });
};

export const createTodo = async (req, res) => {
  //   const { title, description, priority } = req.body;
  const todo = await Todo.create({ ...req.body, isDone: false });
  res.status(StatusCodes.CREATED).json({ todo });
};

export const getTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.status(StatusCodes.OK).json({ todo });
};

export const updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "todo modified", todo: updatedTodo });
};

export const deleteTodo = async (req, res) => {
  const removedTodo = await Todo.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: "todo deleted", todo: removedTodo });
};
