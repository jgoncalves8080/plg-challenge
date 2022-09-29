import { Launch } from "../entities/Launch";

export interface ILaunchesRepository {
  getLaunch: (type: "next" | "upcoming" | "latest" | "past") => Promise<Launch>;
}
