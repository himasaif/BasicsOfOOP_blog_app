import { NextFunction, Response } from "express";
import DatabaseService from "../../../DB/database.services" // عدّل المسار حسب مشروعك
import BlogModel from "../../../DB/models/blog.models"   // عدّل المسار حسب مشروعك
import { IBlog,IRequestWithUser } from "../../../types/types"  // عدّل المسار حسب مشروعك
import { Types } from "mongoose";
 class BlogService {
  private Blog = new DatabaseService<IBlog>(BlogModel);

 addBlog = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
  try {
    const { title, content } = req.body;

    if (!req.authUser?._id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const blog = await this.Blog.create({
      title,
      content,
      author: new Types.ObjectId(String(req.authUser._id)),
    });

    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};
listBlogs = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
  try {
    if (!req.authUser?._id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const blogs = await this.Blog.find({
      author: new Types.ObjectId(String(req.authUser._id)),
    });

    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};
}

export default new BlogService();
