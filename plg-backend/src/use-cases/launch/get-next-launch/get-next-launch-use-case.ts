import { ILaunchesRepository } from "../../../repositories/ILaunchesRepository";

export class GetNextLaunchUseCase {
  constructor(private launchesRepository: ILaunchesRepository) {}

  async execute() {
    const nextLaunch = await this.launchesRepository.getLaunch("next");

    return nextLaunch;
  }
}
