import {ShowDetail} from '../../interfaces';

export const types = {
  SET_SHOWS_LIST: 'SET_SHOWS_LIST',
  GET_SHOWS_LIST: 'GET_SHOWS_LIST',
  SET_SEARCH_SHOWS_LIST: 'SET_SEARCH_SHOWS_LIST',
  SEARCH_SHOWS: 'SEARCH_SHOWS',
};

interface SetShowsListAction {
  type: typeof types.SET_SHOWS_LIST;
  payload: ShowDetail[];
}

interface GetShowsListAction {
  type: typeof types.GET_SHOWS_LIST;
  payload: ShowDetail[];
}

interface SetSearchShowsList {
  type: typeof types.SET_SEARCH_SHOWS_LIST;
  payload: ShowDetail[];
}

export type ShowsActionType =
  | SetShowsListAction
  | GetShowsListAction
  | SetSearchShowsList;
