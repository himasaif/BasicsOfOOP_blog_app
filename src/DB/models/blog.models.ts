import mongoose from "mongoose";
import { IBlog } from "../../types/types";



export const blogSchema = new mongoose.Schema<IBlog>({ 

    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
 
});
const BlogModel = mongoose.models.Blog || mongoose.model <IBlog>("Blog", blogSchema);
export default BlogModel;
export { BlogModel }; 