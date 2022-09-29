import { SpaceXLaunchesRepository } from "../../../repositories/implementations/SpaceXLaunchesRepository";
import { GetUpcomingLaunchesController } from "./get-upcoming-launch-controller";
import { GetUpcomingLaunchUseCase } from "./get-upcoming-launch-use-case";

const spaceXLaunchesRepository = new SpaceXLaunchesRepository();

const getUpcomingLaunchUseCase = new GetUpcomingLaunchUseCase(
  spaceXLaunchesRepository
);

const getUpcomingLaunchesController = new GetUpcomingLaunchesController(
  getUpcomingLaunchUseCase
);

export { getUpcomingLaunchesController };
