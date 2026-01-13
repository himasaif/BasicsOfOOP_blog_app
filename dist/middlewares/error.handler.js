"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globelErrorHandler = exports.asyncHandler = void 0;
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await Promise.resolve(fn(req, res, next));
    }
    catch (error) {
        next(error);
    }
};
exports.asyncHandler = asyncHandler;
const globelErrorHandler = (err, req, res, next) => {
    const errorstatusCode = typeof err.statusCode === "number" ? err.statusCode : 500;
    const message = err.message || "Internal Server Error";
    res.status(errorstatusCode).json({
        status: "error",
        error: message,
    });
};
exports.globelErrorHandler = globelErrorHandler;
//# sourceMappingURL=error.handler.js.map