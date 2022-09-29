import { Launch } from "../../entities/Launch";
import { api } from "../../services/api";
import { ILaunchesRepository } from "../ILaunchesRepository";

export class SpaceXLaunchesRepository implements ILaunchesRepository {
  async getLaunch(
    type: "next" | "upcoming" | "latest" | "past"
  ): Promise<Launch> {
    const nextLaunch = await api.get(`/${type}`);

    return nextLaunch.data;
  }
}
