import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spacexdata.com/v4/launches",
});

export { api };
