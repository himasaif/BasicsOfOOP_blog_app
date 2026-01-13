import * as express from "express";
import { Application, Request, Response } from "express";
import { globelErrorHandler } from "../middlewares/error.handler";
import { connectionDb } from "../DB/connectionDb";
import authRouter from "../modules/auth/controller.auth";
import blogRouter from "../modules/blog/blog.controller";

export const handleController = (app: Application) => {
  app.use(express.json());
  app.use("/auth",authRouter)
  app.use("/blog",blogRouter)
  connectionDb();
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
  });


  app.use(globelErrorHandler)

};
