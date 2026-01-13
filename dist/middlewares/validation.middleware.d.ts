import type { ObjectSchema } from "joi";
type SchemaKeys = "body" | "query" | "params";
type ValidationSchema = Partial<Record<SchemaKeys, ObjectSchema>>;
export declare const validationMiddleware: (schema: ValidationSchema) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export {};
//# sourceMappingURL=validation.middleware.d.ts.map