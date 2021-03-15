import {ShowDetail} from '../../interfaces';

export const types = {
  SET_SHOWS_LIST: 'SET_SHOWS_LIST',
  GET_SHOWS_LIST: 'GET_SHOWS_LIST',
  SET_SEARCH_SHOWS_LIST: 'SET_SEARCH_SHOWS_LIST',
  SEARCH_SHOWS: 'SEARCH_SHOWS',
  SET_SHOWS_LIST_ERROR: 'SET_SHOWS_LIST_ERROR',
  SET_SEARCH_LIST_ERROR: 'SET_SEARCH_LIST_ERROR',
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

interface SetShowsListError {
  type: typeof types.SET_SHOWS_LIST_ERROR;
  payload: any;
}

interface SerSearchListError {
  type: typeof types.SET_SEARCH_LIST_ERROR;
  payload: any;
}
export type ShowsActionType =
  | SetShowsListAction
  | GetShowsListAction
  | SetSearchShowsList
  | SetShowsListError
  | SerSearchListError;
