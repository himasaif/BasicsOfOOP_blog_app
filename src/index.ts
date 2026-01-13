import * as express from "express";
import * as dotenv from "dotenv";
import { handleController } from "./utils/controller.handler";

dotenv.config();

const app: express.Application =express.default();
const port = Number(process.env.PORT) || 3000;

handleController(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
