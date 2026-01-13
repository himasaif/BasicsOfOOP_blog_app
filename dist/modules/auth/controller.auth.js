"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_services_1 = __importDefault(require("./services/auth.services"));
const error_handler_1 = require("../../middlewares/error.handler");
const auth_middlewares_1 = require("../../middlewares/auth.middlewares");
const validation_middleware_1 = require("../../middlewares/validation.middleware");
const auth_schema_1 = require("./auth.schema");
const authRouter = (0, express_1.Router)();
authRouter.post("/signup", (0, validation_middleware_1.validationMiddleware)(auth_schema_1.SignUpSchema), (0, error_handler_1.asyncHandler)(auth_services_1.default.signUp));
authRouter.post("/login", (0, validation_middleware_1.validationMiddleware)(auth_schema_1.LoginSchema), (0, error_handler_1.asyncHandler)(auth_services_1.default.login));
authRouter.get("/profile", auth_middlewares_1.authMiddleware, (0, error_handler_1.asyncHandler)(auth_services_1.default.getProfile));
exports.default = authRouter;
//# sourceMappingURL=controller.auth.js.map