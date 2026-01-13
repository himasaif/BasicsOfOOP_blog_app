"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_services_1 = __importDefault(require("./services/blog.services"));
const auth_middlewares_1 = require("../../middlewares/auth.middlewares");
const error_handler_1 = require("../../middlewares/error.handler");
const blogRouter = (0, express_1.Router)();
blogRouter.post("/add", auth_middlewares_1.authMiddleware, (0, error_handler_1.asyncHandler)(blog_services_1.default.addBlog));
blogRouter.get("/list", auth_middlewares_1.authMiddleware, (0, error_handler_1.asyncHandler)(blog_services_1.default.listBlogs));
exports.default = blogRouter;
//# sourceMappingURL=blog.controller.js.map