import type { ObjectSchema } from "joi";
import { asyncHandler } from "./error.handler";
import type { NextFunction, Request, Response } from "express";

type SchemaKeys = "body" | "query" | "params";

type ValidationSchema = Partial<Record<SchemaKeys, ObjectSchema>>;

export const validationMiddleware = (schema: ValidationSchema) => {
  return asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const schemaKeys = Object.keys(schema) as SchemaKeys[];

    const validationErrors: { key: SchemaKeys; errors: string[] }[] = [];

    for (const key of schemaKeys) {
      const currentSchema = schema[key];
      if (!currentSchema) continue;

      const { error } = currentSchema.validate(req[key], { abortEarly: false });

      if (error) {
        validationErrors.push({
          key,
          errors: error.details.map((d) => d.message),
        });
      }
    }

    if (validationErrors.length) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    next();
  });
};
