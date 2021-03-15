import {ShowEpisodes} from '../../interfaces/episode.types';
import {EpisodesActionType, types} from './types';

const initialState = {
  error: null,
  data: {},
};

export default (state = initialState, {type, payload}: EpisodesActionType) => {
  switch (type) {
    case types.SET_SHOW_EPISODES:
      return {
        ...state,
        data: payload,
      };
    case types.SET_SHOW_EPISODES_ERROR:
      return {
        error: payload,
        data: undefined,
      };
    default:
      return state;
  }
};
