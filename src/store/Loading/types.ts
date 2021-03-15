export const types = {
  SET_LOADING: 'SET_LOADING',
};

interface SetLoading {
  type: typeof types.SET_LOADING;
  payload: boolean;
}

export type LoadingActionType = SetLoading;
