import { Request, Response, NextFunction } from "express";
import { IRequestWithUser } from "../../../types/types";
declare class AuthService {
    private readonly userDb;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    login: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    getProfile: (req: IRequestWithUser, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=auth.services.d.ts.map