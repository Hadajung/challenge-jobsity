import {ShowEpisodes} from '../../interfaces/episode.types';
import {EpisodesActionType, types} from './types';

const initialState: ShowEpisodes[] = [];

export default (state = initialState, {type, payload}: EpisodesActionType) => {
  switch (type) {
    case types.SET_SHOW_EPISODES:
      return payload;
    default:
      return state;
  }
};
