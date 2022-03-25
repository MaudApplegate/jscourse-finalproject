import { INPUT_ON, INPUT_OFF, SET_RULE, DELETE_RULE, CLEAR_RULE_FIELD } from './actions';
import { ActionType, ButtonRulesStateType, StylelistType } from './types';

export const initialButtonState: ButtonRulesStateType = {
  stylelist: [],
  isInputFormOpened: false,
};

export const buttonReducer = (state = initialButtonState, action : ActionType) => {
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
        stylelist: state.stylelist.filter((el: StylelistType) => el.id !== action.payload),
      };
    case CLEAR_RULE_FIELD: return {stylelist: []};
    default:
      return {...state};
  }
};
