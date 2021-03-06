import {ShowDetail} from '../../interfaces';
import {fetchShowsWithPage, searchShows} from '../../service';
import {LoadingActions} from '../actions';
import {types, ShowsActionType} from './types';

export const actions = {
  setShowsList: (payload: ShowDetail[]): ShowsActionType => ({
    type: types.SET_SHOWS_LIST,
    payload,
  }),
  setSearchShowsList: (payload: ShowDetail[]): ShowsActionType => ({
    type: types.SET_SEARCH_SHOWS_LIST,
    payload,
  }),
  setShowsListError: (payload: any): ShowsActionType => ({
    type: types.SET_SHOWS_LIST_ERROR,
    payload,
  }),
  setSearchListError: (payload: any): ShowsActionType => ({
    type: types.SET_SEARCH_LIST_ERROR,
    payload,
  }),
  getShowsList: (page: number) => {
    return (dispatch: any) => {
      dispatch(LoadingActions.actions.setLoading(true));
      return fetchShowsWithPage(page)
        .then((response) => {
          dispatch(LoadingActions.actions.setLoading(false));
          if (response.status === 200 && response.data) {
            return dispatch(actions.setShowsList(response.data));
            // dispatch(actions.setShowsListError({message: ''}));
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(LoadingActions.actions.setLoading(false));
          dispatch(actions.setShowsListError(error));
        });
      // (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    };
  },
  searchShows: (text: string) => {
    return (dispatch: any) => {
      dispatch(LoadingActions.actions.setLoading(true));
      return searchShows(text)
        .then((response) => {
          dispatch(LoadingActions.actions.setLoading(false));
          if (response.status === 200 && response.data) {
            const filterData = response.data.map((item) => item.show);
            return dispatch(actions.setSearchShowsList(filterData));
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(LoadingActions.actions.setLoading(false));
          dispatch(actions.setSearchListError(error));
        });
    };
  },
};
