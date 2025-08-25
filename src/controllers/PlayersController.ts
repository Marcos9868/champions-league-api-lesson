import { Request, Response } from "express";
import { getPlayerById, listPlayers } from "../services/players/PlayersService";
import { ok } from "../utils/HttpHelper";

export const getPlayers = async (req: Request, res: Response) => {
  const response = await listPlayers();
  return res.status(response.statusCode).send(response.body);
}

export const getPlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await getPlayerById(id);
  return res.status(response.statusCode).send(response.body); 
} 