import { Request, Response } from "express";
import { GetPastLaunchUseCase } from "./get-past-launch-use-case";

export class GetPastLaunchesController {
  constructor(private getPastLaunchUseCase: GetPastLaunchUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const pastLaunch = await this.getPastLaunchUseCase.execute();

      return response.status(200).send(pastLaunch);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "unexpected error",
      });
    }
  }
}
