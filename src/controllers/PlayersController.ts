import { Request, Response } from "express";
import { listPlayers } from "../services/players/PlayersService";
import { ok } from "../utils/HttpHelper";

export const getPlayer = async (req: Request, res: Response) => {
  const response = await listPlayers();
  return res.status(response.statusCode).send(response.body);
}