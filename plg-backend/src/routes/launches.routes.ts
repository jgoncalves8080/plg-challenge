import { Router } from "express";
import { getLatestLaunchesController } from "../use-cases/launch/get-latest-launch";
import { getNextLaunchesController } from "../use-cases/launch/get-next-launch";
import { getPastLaunchesController } from "../use-cases/launch/get-past-launch";

const launchRouter = Router();

launchRouter.get("/next", (request, response) =>
  getNextLaunchesController.handle(request, response)
);

launchRouter.get("/past", (request, response) =>
  getPastLaunchesController.handle(request, response)
);

launchRouter.get("/upcoming", (request, response) =>
  getPastLaunchesController.handle(request, response)
);

launchRouter.get("/latest", (request, response) =>
  getLatestLaunchesController.handle(request, response)
);

export default launchRouter;
