import { Router } from "express";


import BlogService from "./services/blog.services";
import { authMiddleware } from "../../middlewares/auth.middlewares";
import { asyncHandler } from "../../middlewares/error.handler";
const blogRouter = Router();


blogRouter.post("/add",authMiddleware, asyncHandler(BlogService.addBlog));
blogRouter.get("/list", authMiddleware,asyncHandler(BlogService.listBlogs));
export default blogRouter;