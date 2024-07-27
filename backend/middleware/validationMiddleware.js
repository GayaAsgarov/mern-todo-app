import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customError.js";

import { TODO_PRIORITY } from "../utils/constants.js";
import mongoose from "mongoose";
import Todo from "../models/TodoModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no todo")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTodoInput = withValidationErrors([
  body("title").notEmpty().withMessage("title is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("priority")
    .isIn(Object.values(TODO_PRIORITY))
    .withMessage("invalid priority value"),
]);

export const validateIdParam = withValidationErrors([
  param("id")
    .custom(async (value, { req }) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidId) throw new BadRequestError("invalid MongoDB id");

      const todo = await Todo.findById(value);
      if (!todo) throw new NotFoundError(`no job with id ${value}`);
    })
    .withMessage(),
]);
