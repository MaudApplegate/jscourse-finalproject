import { PUSH_BUTTON_FAILED, PUSH_BUTTON_SUCCEED } from '../buttonPush/actions';

import {
  GET_BUTTONS_FAILED,
  GET_BUTTONS_LOADING,
  GET_BUTTONS_SUCCEED,
} from './actions';
import { ActionType, ButtonListStateType } from './types';

export const initialButtonListState: ButtonListStateType = {
  data: [],
  error: null,
  isLoading: false,
};

export const buttonsListReducer = (state = initialButtonListState, action : ActionType) => {
  switch (action.type) {
    case GET_BUTTONS_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_BUTTONS_SUCCEED: {
      return { ...state, data: action.payload, isLoading: false };
    }
    case GET_BUTTONS_FAILED: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case PUSH_BUTTON_SUCCEED: {
      return { ...state };
    }
    case PUSH_BUTTON_FAILED: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
