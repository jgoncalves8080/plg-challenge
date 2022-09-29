import { Router } from "express";
import launchesRouter from "./launches.routes";

const routes = Router();

routes.use("/launches", launchesRouter);

export default routes;
