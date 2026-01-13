"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.SignUpSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.SignUpSchema = {
    body: joi_1.default.object({
        username: joi_1.default.string().min(3).max(30).required(),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(6).required(),
        role: joi_1.default.string().valid("user", "admin").optional(),
    }).required(),
    query: joi_1.default.object({}),
    params: joi_1.default.object({}),
};
exports.LoginSchema = {
    body: joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().required(),
    }).required(),
    query: joi_1.default.object({}),
    params: joi_1.default.object({}),
};
//# sourceMappingURL=auth.schema.js.map