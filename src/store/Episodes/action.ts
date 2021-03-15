import {types, EpisodesActionType} from './types';
import {ShowEpisodes} from '../../interfaces/episode.types';
import {LoadingActions} from '../actions';
import {listEpisodes} from '../../service';

const groupBy = (key) => (array) =>
  array.reduce(
    (objectsByKeyValue, obj) => ({
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
  listEpisodes: (id: number) => {
    return (dispatch) => {
      dispatch(actions.setShowEpisodes({showId: id, episodes: []}));
      dispatch(LoadingActions.actions.setLoading(true));
      return listEpisodes(id).then(
        (response) => {
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
        },
        (error) => console.log(error),
      );
    };
  },
};
