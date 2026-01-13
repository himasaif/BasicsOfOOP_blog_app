import { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
export declare const generateToken: (payload: JwtPayload | object | string, secret: Secret, options?: SignOptions) => string;
export declare const verifyToken: <T extends JwtPayload = JwtPayload>(token: string, secret: Secret) => T;
//# sourceMappingURL=token.utils.d.ts.map