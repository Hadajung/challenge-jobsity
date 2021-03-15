export interface Episode {
  id: number;
  url?: string | null;
  name?: string | null;
  season?: number | null;
  number?: number | null;
  type?: string | null;
  airdate?: string | null;
  airstamp?: string | null;
  runtime?: number | null;
  image?: {
    medium?: string | null;
    original?: string | null;
  };
  summary?: string | null;
  _links?: any;
}

export interface ShowEpisodes {
  showId: number;
  episodes: Episode[];
}
