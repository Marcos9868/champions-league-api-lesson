import { Player } from "../models/Player";

const data: Player[] = [
  { id: 1, name: "Ronaldo" },
  { id: 2, name: "Messi"}
]

export const getPlayersData = async (): Promise<Player[]> => {
  const list = data;
  return list;
}

export const getPlayer = async (id: number): Promise<Player | undefined> => {
  const player = data.find(p => p.id === id);
  return player;
}