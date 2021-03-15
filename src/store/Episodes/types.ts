import {ShowEpisodes} from '../../interfaces/episode.types';

export const types = {
  SET_SHOW_EPISODES: 'SET_SHOW_EPISODES',
};

interface SetShowEpisodes {
  type: typeof types.SET_SHOW_EPISODES;
  payload: ShowEpisodes;
}

export type EpisodesActionType = SetShowEpisodes;
