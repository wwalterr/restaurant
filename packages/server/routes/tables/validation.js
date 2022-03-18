import Joi from "joi";

const createSchemaBody = Joi.object({
  restaurant: Joi.string().required(),
  table: Joi.number().min(1).required(),
  seats: Joi.number().min(1),
});

const updateSchemaParams = Joi.object({
  table: Joi.number().min(1).required(),
});

const updateSchemaBody = Joi.object({
  seats: Joi.number().min(1),
});

const findSchemaParams = Joi.object({
  table: Joi.number().min(1).required(),
});

export {
  createSchemaBody,
  updateSchemaParams,
  updateSchemaBody,
  findSchemaParams,
};
