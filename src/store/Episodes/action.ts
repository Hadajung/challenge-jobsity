import {types, EpisodesActionType} from './types';
import {Episode, ShowEpisodes} from '../../interfaces/episode.types';
import {LoadingActions} from '../actions';
import {listEpisodes} from '../../service';

const groupBy = (key: string) => (array: Episode[]) =>
  array.reduce(
    (objectsByKeyValue: any, obj: any) => ({
      ...objectsByKeyValue,
      [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
    }),
    {},
  );
const groupBySeason = groupBy('season');

export const actions = {
  setShowEpisodes: (payload: ShowEpisodes): EpisodesActionType => ({
    type: types.SET_SHOW_EPISODES,
    payload,
  }),
  setShowEpisodesError: (payload: any): EpisodesActionType => ({
    type: types.SET_SHOW_EPISODES_ERROR,
    payload,
  }),
  listEpisodes: (id: number) => {
    return (dispatch: any) => {
      dispatch(actions.setShowEpisodesError(null));
      dispatch(LoadingActions.actions.setLoading(true));
      return listEpisodes(id)
        .then((response) => {
          dispatch(LoadingActions.actions.setLoading(false));
          if (response.status === 200 && response.data) {
            const groupedByArray = groupBySeason(response.data);

            return dispatch(
              actions.setShowEpisodes({
                showId: id,
                episodes: Object.values(groupedByArray),
              }),
            );
          }
        })
        .catch((error) => dispatch(actions.setShowEpisodesError(error)));
    };
  },
};
