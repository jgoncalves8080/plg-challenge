import { ILaunchesRepository } from "../../../repositories/ILaunchesRepository";

export class GetPastLaunchUseCase {
  constructor(private launchesRepository: ILaunchesRepository) {}

  async execute() {
    const pastLaunch = await this.launchesRepository.getLaunch("past");

    return pastLaunch;
  }
}
