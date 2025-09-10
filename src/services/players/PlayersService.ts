import { Player } from "../../models/Player";
import { deletePlayer, getPlayer, getPlayersData, modifyPlayer, registerPlayer } from "../../repositories/PlayersRepository";
import { ok, noContent, created, badRequest } from "../../utils/HttpHelper";

export const listPlayers = async () => {
  const data = await getPlayersData();
  let response = null;
  if (data) {
    response = await ok(data);
  } else {
    response = await noContent(); 
  }

  return response;
};

export const getPlayerById = async (id: number) => {
  const player = await getPlayer(id);
  let response = null;
  if (player == null) {
    return response = await noContent();
  } else {
    response = await ok(player);
  }
  return response
};

export const addNewPlayer = async (player: Player) => {
  const newPlayer = await registerPlayer(player);
  let response = null;
  if (response) {
    response = await created(newPlayer);
  } else {
    response = await badRequest();
  }

  return response;
};

export const updatePlayerById = async (id: number) => {
  let response = null;
  const player = await modifyPlayer(id);
  if (player == null) {
    response = await badRequest();
  } else {
    response = await ok(player);
  }
  return response;
};

export const removePlayerById = async (id: number) => {
  let response = null;
  const player = getPlayerById(id);
  if (player == null) response = await badRequest();
  const removePlayer = await deletePlayer(id);
  if (removePlayer == null) 
  {
    response = await badRequest();
  } else {
    response = await ok(removePlayer);
  }
  return response;
}
