import { Request, Response } from "express";
import { GetNextLaunchUseCase } from "./get-next-launch-use-case";

export class GetNextLaunchesController {
  constructor(private getNextLaunchUseCase: GetNextLaunchUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const nextLaunch = await this.getNextLaunchUseCase.execute();

      return response.status(200).send(nextLaunch);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "unexpected error",
      });
    }
  }
}
