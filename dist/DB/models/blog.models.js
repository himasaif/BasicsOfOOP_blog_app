"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = exports.blogSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.blogSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true },
});
const BlogModel = mongoose_1.default.models.Blog || mongoose_1.default.model("Blog", exports.blogSchema);
exports.BlogModel = BlogModel;
exports.default = BlogModel;
//# sourceMappingURL=blog.models.js.map