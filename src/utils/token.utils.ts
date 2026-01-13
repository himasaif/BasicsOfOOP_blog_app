import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

export const generateToken = (
  payload: JwtPayload | object | string,
  secret: Secret,
  options?: SignOptions
): string => {
  return jwt.sign(payload, secret, options);
};

export const verifyToken = <T extends JwtPayload = JwtPayload>(
  token: string,
  secret: Secret
): T => {
  return jwt.verify(token, secret) as T;
};
