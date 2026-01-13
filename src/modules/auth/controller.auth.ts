import { Router } from "express";
import authService from "./services/auth.services"
import { asyncHandler } from "../../middlewares/error.handler";
import { authMiddleware } from "../../middlewares/auth.middlewares";
import { validationMiddleware } from "../../middlewares/validation.middleware";
import {  LoginSchema, SignUpSchema } from "./auth.schema";





const authRouter = Router();    
authRouter.post("/signup",validationMiddleware(SignUpSchema),asyncHandler(authService.signUp));
authRouter.post("/login",validationMiddleware(LoginSchema),asyncHandler(authService.login));
authRouter.get("/profile",authMiddleware,asyncHandler(authService.getProfile))

export default authRouter;