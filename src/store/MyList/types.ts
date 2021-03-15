import {ShowDetail} from '../../interfaces';

export const types = {
  ADD_TO_MY_LIST: 'ADD_TO_MY_LIST',
  REMOVE_FROM_MY_LIST: 'REMOVE_FROM_MY_LIST',
};

interface AddToMyListAction {
  type: typeof types.ADD_TO_MY_LIST;
  payload: ShowDetail;
}

interface RemoveFromMyListAction {
  type: typeof types.REMOVE_FROM_MY_LIST;
  payload: {
    id: number;
  };
}

export type MyListActionType = AddToMyListAction | RemoveFromMyListAction;
