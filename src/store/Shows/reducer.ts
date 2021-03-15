import {ShowsActionType, types} from './types';

const initialState = {
  allShows: [],
  searchList: [],
};

export default (state = initialState, {type, payload}: ShowsActionType) => {
  switch (type) {
    case types.SET_SHOWS_LIST:
      return {
        ...state,
        allShows: [...state.allShows, ...payload],
      };
    case types.SET_SEARCH_SHOWS_LIST:
      return {
        ...state,
        searchList: payload,
      };
    default:
      return state;
  }
};
