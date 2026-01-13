import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { compareSync } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import DatabaseService from "../../../DB/database.services";
import UserModel from "../../../DB/models/user.models";
import { IRequestWithUser, IUser, userRoles } from "../../../types/types";
import { generateToken } from "../../../utils/token.utils";

interface ISignUpDTO {
  username: string;
  email: string;
  password: string;
  role?: userRoles;
}

interface ILoginDTO {
  email: string;
  password: string;
}

class AuthService {
  private readonly userDb = new DatabaseService<IUser>(UserModel);

  // =========================
  // ✅ SIGN UP
  // =========================
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password, role }: ISignUpDTO = req.body;

      // لو بتستخدم Joi validation middleware يبقى ممكن تشيل ده
      if (!username || !email || !password) {
        return res
          .status(400)
          .json({ message: "username, email, password are required" });
      }

      // check existing email
      const existingUser = await this.userDb.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      // check existing username (اختياري بس مهم لو username unique)
      const existingUsername = await this.userDb.findOne({ username });
      if (existingUsername) {
        return res.status(409).json({ message: "Username already exists" });
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create user
      const newUser = await this.userDb.create({
        username,
        email,
        password: hashedPassword,
        role: role ?? userRoles.user,
      });

      // remove password from response
      const userObj = (newUser as any).toObject?.() ?? newUser;
      delete userObj.password;

      return res.status(201).json(userObj);
    } catch (error) {
      return next(error);
    }
  };

  // =========================
  // ✅ LOGIN
  // =========================
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password }: ILoginDTO = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "email and password are required" });
      }

      const user = await this.userDb.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = compareSync(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = generateToken(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d", jwtid: uuidv4() }
      );

      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
    }
  };

  // =========================
  // ✅ GET PROFILE
  // =========================
  getProfile = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
    try {
      if (!req.authUser?._id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const user = await this.userDb.findById(String(req.authUser._id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const userObj = (user as any).toObject?.() ?? user;
      delete userObj.password;

      return res.status(200).json(userObj);
    } catch (error) {
      return next(error);
    }
  };
}

export default new AuthService();
