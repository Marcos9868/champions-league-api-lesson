import { Router } from "express";
import { addPlayer, getPlayer, getPlayers } from "../controllers/PlayersController";

const playersRoute = Router();

playersRoute.get("/players", getPlayers);
playersRoute.get("/players/:id", getPlayer);
playersRoute.post("/players", addPlayer);
playersRoute.put("/players/:id");
playersRoute.delete("/players/:id")

export default playersRoute;