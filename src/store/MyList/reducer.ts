import {ShowDetail} from '../../interfaces';
import {MyListActionType, types} from './types';

const initialState: ShowDetail[] = [];

export default (state = initialState, {type, payload}: MyListActionType) => {
  switch (type) {
    case types.ADD_TO_MY_LIST:
      const sortedArray = [...state, payload].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      return sortedArray;
    case types.REMOVE_FROM_MY_LIST:
      return state.filter((item: ShowDetail) => item.id !== payload.id);
    default:
      return state;
  }
};
