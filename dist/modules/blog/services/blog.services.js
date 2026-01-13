"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_services_1 = __importDefault(require("../../../DB/database.services")); // عدّل المسار حسب مشروعك
const blog_models_1 = __importDefault(require("../../../DB/models/blog.models")); // عدّل المسار حسب مشروعك
const mongoose_1 = require("mongoose");
class BlogService {
    constructor() {
        this.Blog = new database_services_1.default(blog_models_1.default);
        this.addBlog = async (req, res, next) => {
            try {
                const { title, content } = req.body;
                if (!req.authUser?._id) {
                    res.status(401).json({ message: "Unauthorized" });
                    return;
                }
                const blog = await this.Blog.create({
                    title,
                    content,
                    author: new mongoose_1.Types.ObjectId(String(req.authUser._id)),
                });
                res.status(201).json(blog);
            }
            catch (error) {
                next(error);
            }
        };
        this.listBlogs = async (req, res, next) => {
            try {
                if (!req.authUser?._id) {
                    res.status(401).json({ message: "Unauthorized" });
                    return;
                }
                const blogs = await this.Blog.find({
                    author: new mongoose_1.Types.ObjectId(String(req.authUser._id)),
                });
                res.status(200).json(blogs);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blog.services.js.map