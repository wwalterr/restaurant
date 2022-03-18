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
    response.status(200).json({ status: true });
  }
);

router.put(
  "/:table",
  validator.params(updateSchemaParams),
  validator.body(updateSchemaBody),
  async (request, response) => {
    response.status(200).json({ status: true });
  }
);

router.get(
  "/:table",
  validator.params(findSchemaParams),
  async (request, response) => {
    response.status(200).json({
      status: true,
      data: { restaurant: "restaurant", table: 1, seats: 8 },
    });
  }
);

router.get("/", async (request, response) => {
  response.status(200).json({
    status: true,
    data: [{ restaurant: "restaurant", table: 1, seats: 8 }],
  });
});

export { router };
