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
  getShowsList: (page: number) => {
    return (dispatch) => {
      dispatch(LoadingActions.actions.setLoading(true));
      return fetchShowsWithPage(page).then((response) => {
        dispatch(LoadingActions.actions.setLoading(false));
        if (response.status === 200 && response.data) {
          return dispatch(actions.setShowsList(response.data));
        }
      });
      // (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    };
  },
  searchShows: (text: string) => {
    return (dispatch) => {
      dispatch(LoadingActions.actions.setLoading(true));
      return searchShows(text).then((response) => {
        console.log('response', response);
        dispatch(LoadingActions.actions.setLoading(false));
        if (response.status === 200 && response.data) {
          const filterData = response.data.map((item) => item.show);
          console.log(filterData);
          return dispatch(actions.setSearchShowsList(filterData));
        }
      });
    };
  },
};
