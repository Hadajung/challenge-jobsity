import {ShowsActionType, types} from './types';

const initialState = {
  allShows: {
    data: [],
    error: null,
  },
  searchList: {
    data: [],
    error: null,
  },
};

export default (state = initialState, {type, payload}: ShowsActionType) => {
  switch (type) {
    case types.SET_SHOWS_LIST:
      return {
        ...state,
        allShows: {
          error: null,
          data: [...state.allShows.data, ...payload],
        },
      };
    case types.SET_SEARCH_SHOWS_LIST:
      return {
        ...state,
        searchList: {
          data: payload,
          error: null,
        },
      };
    case types.SET_SHOWS_LIST_ERROR:
      return {
        ...state,
        allShows: {
          error: payload,
          data: undefined,
        },
      };
    default:
      return state;
  }
};
