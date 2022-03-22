import {
  GET_BUTTONS_FAILED,
  GET_BUTTONS_LOADING,
  GET_BUTTONS_SUCCEED,
  PUSH_BUTTON_FAILED,
  PUSH_BUTTON_SUCCEED,
} from './actions';

export const initialButtonPushState = {
  error: null,
  changehandler: false,
};

export const buttonPushReducer = (state = initialButtonPushState, action) => {
  switch (action.type) {
    case PUSH_BUTTON_SUCCEED: {
      return { ...state, changehandler: !state.changehandler };
    }
    case PUSH_BUTTON_FAILED: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
