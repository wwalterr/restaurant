import { Router } from "express";

import joi from "express-joi-validation";

import {
  createSchemaBody,
  updateSchemaParams,
  updateSchemaBody,
  findSchemaParams,
} from "./validation";

const router = Router();

const validator = joi.createValidator({});

router.post(
  "/",
  validator.body(createSchemaBody),
  async (request, response) => {
    response.status(200).json({});
  }
);

router.put(
  "/:restaurant/:client",
  validator.params(updateSchemaParams),
  validator.body(updateSchemaBody),
  async (request, response) => {
    response.status(200).json({});
  }
);

router.get(
  "/:restaurant/:client",
  validator.params(findSchemaParams),
  async (request, response) => {
    response.status(200).json({
      client: "",
      restaurant: "",
      table: 1,
      date: new Date(),
      duration: 1,
      status: "",
    });
  }
);

export { router };
