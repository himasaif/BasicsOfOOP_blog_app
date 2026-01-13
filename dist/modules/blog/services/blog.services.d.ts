import { NextFunction, Response } from "express";
import { IRequestWithUser } from "../../../types/types";
declare class BlogService {
    private Blog;
    addBlog: (req: IRequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    listBlogs: (req: IRequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
declare const _default: BlogService;
export default _default;
//# sourceMappingURL=blog.services.d.ts.map