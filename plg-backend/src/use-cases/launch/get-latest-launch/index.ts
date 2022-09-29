import { SpaceXLaunchesRepository } from "../../../repositories/implementations/SpaceXLaunchesRepository";
import { GetLatestLaunchesController } from "./get-latest-launch-controller";
import { GetLatestLaunchUseCase } from "./get-latest-launch-use-case";

const spaceXLaunchesRepository = new SpaceXLaunchesRepository();

const getLatestLaunchUseCase = new GetLatestLaunchUseCase(
  spaceXLaunchesRepository
);

const getLatestLaunchesController = new GetLatestLaunchesController(
  getLatestLaunchUseCase
);

export { getLatestLaunchesController };
