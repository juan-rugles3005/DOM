// src/app/models/player.model.ts
export interface Player {
  idPlayer: string;
  strPlayer: string;
  strNationality: string;
  strTeam: string;
  strPosition: string;
  dateBorn: string;
  strThumb: string;
  strDescriptionEN: string;
}

export interface PlayerSearchResponse {
  player: Player[] | null;
}