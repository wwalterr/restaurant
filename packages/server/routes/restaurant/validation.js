import Joi from "joi";

const createSchemaBody = Joi.object({
  restaurant: Joi.string().required(),
  opening: Joi.date().required(),
  closing: Joi.date().required(),
});

const updateSchemaParams = Joi.object({
  restaurant: Joi.string().required(),
});

const updateSchemaBody = Joi.object({
  opening: Joi.date().required(),
  closing: Joi.date().required(),
});

const findSchemaParams = Joi.object({
  restaurant: Joi.string().required(),
});

export {
  createSchemaBody,
  updateSchemaParams,
  updateSchemaBody,
  findSchemaParams,
};
