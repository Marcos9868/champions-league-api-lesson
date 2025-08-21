import { Router } from "express";
import { getPlayer } from "../controllers/PlayersController";

const playersRoute = Router();

playersRoute.get("/players", getPlayer)

export default playersRoute;