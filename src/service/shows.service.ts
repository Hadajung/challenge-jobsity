import {ShowDetail, SearchItem} from '../interfaces';
import {Episode} from '../interfaces/episode.types';
import {AXIOSBASE} from './index';

export const fetchShowsWithPage = (page: number = 0) => {
  return AXIOSBASE.get<ShowDetail[]>(`shows?page=${page}`);
};

export const searchShows = (text: string) => {
  return AXIOSBASE.get<SearchItem[]>(`search/shows?q=${text}`);
};

export const listEpisodes = (id: number) => {
  return AXIOSBASE.get<Episode[]>(`shows/${id}/episodes`);
};
