import {ShowEpisodes} from '../../interfaces/episode.types';

export const types = {
  SET_SHOW_EPISODES: 'SET_SHOW_EPISODES',
  SET_SHOW_EPISODES_ERROR: 'SET_SHOW_EPISODES_ERROR',
};

interface SetShowEpisodes {
  type: typeof types.SET_SHOW_EPISODES;
  payload: ShowEpisodes;
}

interface SetShowEpisodesError {
  type: typeof types.SET_SHOW_EPISODES_ERROR;
  payload: any;
}

export type EpisodesActionType = SetShowEpisodes | SetShowEpisodesError;
