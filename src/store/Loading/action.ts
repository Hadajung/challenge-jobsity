import {types, LoadingActionType} from './types';

export const actions = {
  setLoading: (payload: boolean): LoadingActionType => ({
    type: types.SET_LOADING,
    payload,
  }),
};
