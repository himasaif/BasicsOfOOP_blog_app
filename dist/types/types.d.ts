import { Types } from "mongoose";
import { Request } from "express";
export interface IError {
    message: string;
    statusCode?: number;
    stack?: string;
    cause?: string;
}
export declare enum userRoles {
    user = "user",
    admin = "admin"
}
export interface IUser {
    _id?: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role?: userRoles;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IBlog {
    _id?: Types.ObjectId;
    title: string;
    content: string;
    author: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IRequestWithUser extends Request {
    authUser?: IUser;
}
//# sourceMappingURL=types.d.ts.map