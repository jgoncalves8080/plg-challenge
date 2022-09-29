import { SpaceXLaunchesRepository } from "../../../repositories/implementations/SpaceXLaunchesRepository";
import { GetPastLaunchesController } from "./get-past-launch-controller";
import { GetPastLaunchUseCase } from "./get-past-launch-use-case";

const spaceXLaunchesRepository = new SpaceXLaunchesRepository();

const getPastLaunchUseCase = new GetPastLaunchUseCase(spaceXLaunchesRepository);

const getPastLaunchesController = new GetPastLaunchesController(
  getPastLaunchUseCase
);

export { getPastLaunchesController };
