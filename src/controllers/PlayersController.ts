import { Request, Response } from "express";
import { addNewPlayer, getPlayerById, listPlayers, removePlayerById, updatePlayerById } from "../services/players/PlayersService";
import { ok } from "../utils/HttpHelper";

export const getPlayers = async (req: Request, res: Response) => {
  const response = await listPlayers();
  return res.status(response.statusCode).send(response.body);
}

export const getPlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await getPlayerById(id);
  return res.status(response.statusCode).send(response.body); 
};

export const addPlayer = async (req: Request, res: Response) => {
  const info = req.body;
  const response = await addNewPlayer(info);
  return res.status(response.statusCode).send(response.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await updatePlayerById(id);
  return res.status(response.statusCode).send(response.body);
};

export const removePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await removePlayerById(id);
  return res.status(response.statusCode).send(response.body);
};