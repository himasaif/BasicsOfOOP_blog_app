import { IError } from "../types/types";
import { Request, Response, NextFunction, RequestHandler } from "express";
export declare const asyncHandler: (fn: RequestHandler) => RequestHandler;
export declare const globelErrorHandler: (err: IError, req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=error.handler.d.ts.map