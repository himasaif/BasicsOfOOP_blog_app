import { IError } from "../types/types";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const asyncHandler =
  (fn: RequestHandler): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.resolve(fn(req, res, next));
    } catch (error) {
      next(error);
    }
  };

export const globelErrorHandler = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorstatusCode =
    typeof err.statusCode === "number" ? err.statusCode : 500;

  const message = err.message || "Internal Server Error";

  res.status(errorstatusCode).json({
    status: "error",
    error: message,
  });
};
