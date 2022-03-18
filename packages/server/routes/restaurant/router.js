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
  "/:restaurant",
  validator.params(updateSchemaParams),
  validator.body(updateSchemaBody),
  async (request, response) => {
    response.status(200).json({});
  }
);

router.get(
  "/:restaurant",
  validator.params(findSchemaParams),
  async (request, response) => {
    response.status(200).json({
      restaurant: "",
      opening: new Date(),
      closing: new Date(),
    });
  }
);

router.get("/", async (request, response) => {
  response.status(200).json([
    {
      restaurant: "",
      opening: new Date(),
      closing: new Date(),
    },
  ]);
});

export { router };
