import express from "express";
import playersRoute from "./routes/PlayersRoute";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", playersRoute);
  return app;
}
