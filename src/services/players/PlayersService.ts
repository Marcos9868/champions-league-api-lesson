import { ok, noContent } from "../../utils/HttpHelper";

export const listPlayers = async () => {
  const data = { player: "Ronaldo" }
  let response = null;
  if (data) {
    response = await ok(data);
  } else {
    response = await noContent(); 
  }

  return response;
};
