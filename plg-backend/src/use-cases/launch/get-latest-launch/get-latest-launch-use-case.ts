import { ILaunchesRepository } from "../../../repositories/ILaunchesRepository";

export class GetLatestLaunchUseCase {
  constructor(private launchesRepository: ILaunchesRepository) {}

  async execute() {
    const latestLaunch = await this.launchesRepository.getLaunch("latest");

    return latestLaunch;
  }
}
