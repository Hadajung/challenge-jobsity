import {ShowDetail} from '../../interfaces';
import {types, MyListActionType} from './types';

export const actions = {
  addToMyList: (item: ShowDetail): MyListActionType => ({
    type: types.ADD_TO_MY_LIST,
    payload: item,
  }),
  removeFromMyList: (payload: {id: number}): MyListActionType => ({
    type: types.REMOVE_FROM_MY_LIST,
    payload,
  }),
};
