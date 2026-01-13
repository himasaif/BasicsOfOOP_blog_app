import Joi from "joi";

export const SignUpSchema = {
  body: Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid("user", "admin").optional(),
  }).required(),
  query: Joi.object({}),
  params: Joi.object({}),
};

export const LoginSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).required(),
  query: Joi.object({}),
  params: Joi.object({}),
};
