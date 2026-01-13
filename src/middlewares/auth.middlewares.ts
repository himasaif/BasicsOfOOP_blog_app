import { NextFunction, Response } from "express";
import { asyncHandler } from "./error.handler";
import { IRequestWithUser, IUser } from "../types/types";
import DatabaseService from "../DB/database.services";
import UserModel from "../DB/models/user.models";
import { verifyToken } from "../utils/token.utils";

type DecodedToken = {
  id: string;
  role?: string;
  iat?: number;
  exp?: number;
};

export const authMiddleware = () => {
  const userDb = new DatabaseService<IUser>(UserModel);

  return asyncHandler(async (req: IRequestWithUser, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization Bearer token is missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    const decoded = verifyToken<DecodedToken>(token, process.env.JWT_SECRET as string);

    const user = await userDb.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.authUser = user;
    next();
  });
};
