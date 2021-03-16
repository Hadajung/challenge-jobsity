interface Image {
  medium?: string;
  original?: string;
}

export interface ShowDetail {
  id: number;
  url?: string | null;
  name: string | null;
  type: string | null;
  genres: string[] | null;
  status?: string | null;
  runtime?: number | null;
  premeired?: string | null;
  officialSite?: string | null;
  schedule: {
    time?: string | null;
    days?: string[] | null;
  };
  rating?: {
    average?: number | null;
  };
  weight?: number | null;
  network?: {
    id?: number | null;
    name?: string | null;
    country?: {
      name?: string | null;
      code?: string | null;
      timezone?: string | null;
    } | null;
  };
  webChannel?: string | null;
  externals?: {
    tvrage?: number | null;
    thetvdb?: number | null;
    imdb?: string | null;
  } | null;
  image: Image | null;
  summary: string | null;
  updated?: number | null;
  _links: any;
}

export interface SearchItem {
  score?: number | null;
  show: ShowDetail;
}
