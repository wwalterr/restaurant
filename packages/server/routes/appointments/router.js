import { Router } from "express";

import joi from "express-joi-validation";

import {
  createSchemaBody,
  updateSchemaParams,
  updateSchemaBody,
  findSchemaParams,
} from "./validation.js";

import Appointments from "./model.js";

const router = Router();

const validator = joi.createValidator({});

router.post(
  "/",
  validator.body(createSchemaBody),
  async (request, response) => {
    try {
      const cursor = await Appointments.create(request.body);
    } catch (error) {
      throw error;
    }

    response.status(200).json({ status: true });
  }
);

router.put(
  "/:restaurant/:client",
  validator.params(updateSchemaParams),
  validator.body(updateSchemaBody),
  async (request, response) => {
    try {
      const cursor = await Appointments.findOneAndUpdate(
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
  "/:restaurant/:client",
  validator.params(findSchemaParams),
  async (request, response) => {
    try {
      const cursor = await Appointments.findOne(request.params).select({
        _id: 0,
        __v: 0,
      });

      if (!cursor) throw new Error("Appointment not found");

      response.status(200).json({ status: true, data: cursor._doc });
    } catch (error) {
      throw error;
    }
  }
);

export { router };
