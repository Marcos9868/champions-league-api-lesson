import { Player } from "../models/Player";

const data: Player[] = [
  { 
    id: 1, 
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 89,
      shooting: 93,
      passing: 82,
      dribbling: 88,
      defending: 35,
      physical: 78
    }
  },
  { 
    id: 2, 
    name: "Leonel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      overall: 93,
      pace: 85,
      shooting: 94,
      passing: 91,
      dribbling: 95,
      defending: 38,
      physical: 65
    }
  },
  {
    id: 3,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      overall: 89,
      diving: 88,
      handling: 85,
      kicking: 85,
      reflexes: 90,
      speed: 40,
      positioning: 88
    }
  }
]

export const getPlayersData = async (): Promise<Player[]> => {
  const list = await data;
  return list;
}

export const getPlayer = async (id: number): Promise<Player | undefined> => {
  const player = data.find(p => p.id === id);
  return player;
};

export const registerPlayer = async (player: Player): Promise<Player> => {
  const newPlayer = await data.push(player);
  return player;
}

export const modifyPlayer = async (id: number): Promise<void> => {
  const index = data.findIndex((p) => p.id == id);
};

export const deletePlayer = async (id: number): Promise<void> => {
  const index = data.findIndex((p) => p.id == id);
  if (index != 1) {
    data.splice(index, 1);
  }
}