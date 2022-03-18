import { Router } from "express";

import joi from "express-joi-validation";

import {
  createSchemaBody,
  updateSchemaParams,
  updateSchemaBody,
  findSchemaParams,
} from "./validation.js";

import Tables from "./model.js";

const router = Router();

const validator = joi.createValidator({});

router.post(
  "/",
  validator.body(createSchemaBody),
  async (request, response) => {
    try {
      const cursor = await Tables.create(request.body);
    } catch (error) {
      throw error;
    }

    response.status(200).json({ status: true });
  }
);

router.put(
  "/:table",
  validator.params(updateSchemaParams),
  validator.body(updateSchemaBody),
  async (request, response) => {
    try {
      const cursor = await Tables.findOneAndUpdate(
        request.params,
        request.body
      );
    } catch (error) {
      throw error;
    }

    response.status(200).json({ status: true });
  }
);

router.get(
  "/:table",
  validator.params(findSchemaParams),
  async (request, response) => {
    try {
      const cursor = await Tables.findOne(request.params).select({
        _id: 0,
        __v: 0,
      });

      if (!cursor) throw new Error("Table not found");

      response.status(200).json({ status: true, data: cursor._doc });
    } catch (error) {
      throw error;
    }
  }
);

router.get("/", async (request, response) => {
  try {
    const cursor = await Tables.find({}).select({
      _id: 0,
      __v: 0,
    });

    if (!cursor || !cursor.length) throw new Error("Table (s) not found");

    response
      .status(200)
      .json({ status: true, data: cursor.map((item) => item._doc) });
  } catch (error) {
    throw error;
  }
});

export { router };
