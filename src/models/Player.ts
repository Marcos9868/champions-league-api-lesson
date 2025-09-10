export interface Player {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    overall?: number;
    pace?: number;
    shooting?: number;
    passing?: number;
    dribbling?: number;
    defending?: number;
    physical?: number;
    diving?: number;
    handling?: number;
    kicking?: number;
    reflexes?: number;
    speed?: number;
    positioning?: number;
  }
}