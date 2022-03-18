import Joi from "joi";

const createSchemaBody = Joi.object({
  client: Joi.string().required(),
  restaurant: Joi.string().required(),
  table: Joi.number().min(1).required(),
  date: Joi.date().greater("now").required(),
  duration: Joi.number().min(1),
  status: Joi.string().valid(...["pending", "accepted", "rejected"]),
});

const updateSchemaParams = Joi.object({
  restaurant: Joi.string().required(),
  client: Joi.string().required(),
});

const updateSchemaBody = Joi.object({
  table: Joi.number().min(1),
  date: Joi.date().greater("now"),
  duration: Joi.number().min(1),
  status: Joi.string().valid(...["pending", "accepted", "rejected"]),
});

const findSchemaParams = Joi.object({
  restaurant: Joi.string().required(),
  client: Joi.string().required(),
});

export {
  createSchemaBody,
  updateSchemaParams,
  updateSchemaBody,
  findSchemaParams,
};
