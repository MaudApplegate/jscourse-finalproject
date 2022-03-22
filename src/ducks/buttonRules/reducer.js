import { INPUT_ON, INPUT_OFF, SET_RULE, DELETE_RULE } from './actions';

export const initialButtonState = {
  stylelist: [],
  isInputFormOpened: false,
};

export const buttonReducer = (state = initialButtonState, action) => {
  switch (action.type) {
    case INPUT_ON:
      return { ...state, isInputFormOpened: true };
    case INPUT_OFF:
      return { ...state, isInputFormOpened: false };

    case SET_RULE:
      return { ...state, stylelist: [...state.stylelist, action.payload] };

    case DELETE_RULE:
      return {
        ...state,
        stylelist: state.stylelist.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};
