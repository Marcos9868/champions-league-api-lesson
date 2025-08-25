import { Router } from "express";
import { getPlayer, getPlayers } from "../controllers/PlayersController";

const playersRoute = Router();

playersRoute.get("/players", getPlayers);
playersRoute.get("/players/:id", getPlayer);

export default playersRoute;