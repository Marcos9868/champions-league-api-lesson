import { getPlayer, getPlayersData } from "../../repositories/PlayersRepository";
import { ok, noContent } from "../../utils/HttpHelper";

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
  }
  response = await ok(player);
  return response
}
