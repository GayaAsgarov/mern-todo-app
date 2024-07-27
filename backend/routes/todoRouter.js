import { Router } from "express";
const router = Router();

import {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";
import {
  validateIdParam,
  validateTodoInput,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllTodos).post(validateTodoInput, createTodo);
router
  .route("/:id")
  .get(validateIdParam, getTodo)
  .delete(validateIdParam, deleteTodo)
  .patch(validateIdParam, validateTodoInput, updateTodo);

export default router;
