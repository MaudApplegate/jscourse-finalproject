import {
  GET_BUTTONS_FAILED,
  GET_BUTTONS_LOADING,
  GET_BUTTONS_SUCCEED,
} from './actions';

export const initialButtonListState = {
  data: [],
  error: null,
  isLoading: false,
};

export const buttonsListReducer = (state = initialButtonListState, action) => {
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
    default:
      return state;
  }
};
