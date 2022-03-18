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

router.post("/", validator.body(createSchemaBody), (request, response) => {
  response.status(200).json({});
});

router.put(
  "/:table",
  validator.params(updateSchemaParams),
  validator.body(updateSchemaBody),
  (request, response) => {
    response.status(200).json({});
  }
);

router.get(
  "/:table",
  validator.params(findSchemaParams),
  (request, response) => {
    response.status(200).json({ restaurant: "restaurant", table: 1, seats: 8 });
  }
);

router.get("/", (request, response) => {
  response.status(200).json([{ restaurant: "restaurant", table: 1, seats: 8 }]);
});

export { router };
