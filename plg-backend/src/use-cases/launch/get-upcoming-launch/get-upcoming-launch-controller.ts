import { Request, Response } from "express";
import { GetUpcomingLaunchUseCase } from "./get-upcoming-launch-use-case";

export class GetUpcomingLaunchesController {
  constructor(private getUpcomingLaunchUseCase: GetUpcomingLaunchUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const upcomingLaunch = await this.getUpcomingLaunchUseCase.execute();

      return response.status(200).send(upcomingLaunch);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "unexpected error",
      });
    }
  }
}
