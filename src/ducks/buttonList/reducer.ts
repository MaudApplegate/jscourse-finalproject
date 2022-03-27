


import { ActionType, ButtonsActions } from './types';

export const initialButtonListState: any = {
  data: [],
  error: null,
  isLoading: false,
};

export const buttonsListReducer = (state = initialButtonListState, action : ActionType) => {
  switch (action.type) {
    case ButtonsActions.GET_BUTTONS_LOADING: {
      return { ...state, isLoading: true };
    }
    case ButtonsActions.GET_BUTTONS_SUCCEED: {
      return { ...state, data: action.payload, isLoading: false };
    }
    case ButtonsActions.GET_BUTTONS_FAILED: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case ButtonsActions.PUSH_BUTTON_SUCCEED: {
      return { ...state };
    }
    case ButtonsActions.PUSH_BUTTON_FAILED: {
      return { ...state, error: action.payload };
    }
    case ButtonsActions.DELETE_BUTTON: {
      return {...state}
    }
    case ButtonsActions.PATCH_BUTTON: {
      return {...state}
    }
    default:
      return state;
  }
};
