import {LoadingActionType, types} from './types';

const initialState: boolean = false;

export default (state = initialState, {type, payload}: LoadingActionType) => {
  switch (type) {
    case types.SET_LOADING:
      return payload;
    default:
      return state;
  }
};
