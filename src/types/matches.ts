export interface IMatches {
  data: {
    matches: IMatch[];
  };
  ok: boolean;
}

export interface IMatch {
  awayScore: number;
  awayTeam: {
    name: string;
    place: number;
    players: IPlayer[];
    points: 13;
    total_kills: 9;
  };
  homeScore: number;
  homeTeam: {
    name: string;
    place: number;
    players: IPlayer[];
    points: number;
    total_kills: number;
  };
  status: string;
  time: string;
  title: string;
}

export interface IPlayer {
  kills: number;
  username: string;
}
