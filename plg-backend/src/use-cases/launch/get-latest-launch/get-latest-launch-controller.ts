import { Request, Response } from "express";
import { GetLatestLaunchUseCase } from "./get-latest-launch-use-case";

export class GetLatestLaunchesController {
  constructor(private getLatestLaunchUseCase: GetLatestLaunchUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const latestLaunch = await this.getLatestLaunchUseCase.execute();

      return response.status(200).send(latestLaunch);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "unexpected error",
      });
    }
  }
}
