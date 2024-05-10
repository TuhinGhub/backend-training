import express, { Request, Response } from "express";
import HealthCheckController from "./controller/HealthCheckController";

const app = express();
const port = 3000;

app.get("/healthcheck", (req: Request, res: Response) => {
  HealthCheckController.checkHealth(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
