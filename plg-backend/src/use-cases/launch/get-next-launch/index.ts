import { SpaceXLaunchesRepository } from "../../../repositories/implementations/SpaceXLaunchesRepository";
import { GetNextLaunchUseCase } from "./get-next-launch-use-case";
import { GetNextLaunchesController } from "./get-next-launches-controller";

const spaceXLaunchesRepository = new SpaceXLaunchesRepository();

const getNextLaunchUseCase = new GetNextLaunchUseCase(spaceXLaunchesRepository);

const getNextLaunchesController = new GetNextLaunchesController(
  getNextLaunchUseCase
);

export { getNextLaunchesController };
