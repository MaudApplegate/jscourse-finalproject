import { Dispatch } from 'react';
import { getButtons } from '../../services/api/api';
import { ActionType } from './types';
import { ButtonList } from './types';

export const GET_BUTTONS_LOADING = 'GET_BUTTONS_LOADING';
export const GET_BUTTONS_SUCCEED = 'GET_BUTTONS_SUCCEED';
export const GET_BUTTONS_FAILED = 'GET_BUTTONS_FAILED';

export const ACTION_GET_BUTTONS_LOADING = () => ({
  type: GET_BUTTONS_LOADING,
});

export const ACTION_GET_BUTTONS_SUCCEED = (payload: ButtonList[]) => ({
  type: GET_BUTTONS_SUCCEED,
  payload,
});

export const ACTION_GET_BUTTONS_FAILED = (error: Error) => ({
  type: GET_BUTTONS_FAILED,
  error,
});

export const getButtonsAction = () => async (dispatch: Dispatch<ActionType>) => {
  dispatch(ACTION_GET_BUTTONS_LOADING());
  try {
    const data = await getButtons();
    dispatch(ACTION_GET_BUTTONS_SUCCEED(data));
  } catch (error) {
    dispatch(ACTION_GET_BUTTONS_FAILED(error as Error));
  }
};
