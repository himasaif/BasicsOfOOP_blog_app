"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const error_handler_1 = require("./error.handler");
const validationMiddleware = (schema) => {
    return (0, error_handler_1.asyncHandler)(async (req, res, next) => {
        const schemaKeys = Object.keys(schema);
        const validationErrors = [];
        for (const key of schemaKeys) {
            const currentSchema = schema[key];
            if (!currentSchema)
                continue;
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
exports.validationMiddleware = validationMiddleware;
//# sourceMappingURL=validation.middleware.js.map