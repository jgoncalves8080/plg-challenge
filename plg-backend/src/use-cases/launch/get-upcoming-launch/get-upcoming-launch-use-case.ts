import { ILaunchesRepository } from "../../../repositories/ILaunchesRepository";

export class GetUpcomingLaunchUseCase {
  constructor(private launchesRepository: ILaunchesRepository) {}

  async execute() {
    const upcomingLaunch = await this.launchesRepository.getLaunch("upcoming");

    return upcomingLaunch;
  }
}
