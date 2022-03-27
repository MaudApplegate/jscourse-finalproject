import { INPUT_ON, INPUT_OFF, SET_RULE, DELETE_RULE, CLEAR_RULE_FIELD, SET_RULES_FROM_PATCH } from './actions';
import { ActionType, ButtonRulesStateType, StylelistType } from './types';

export const initialButtonState: ButtonRulesStateType = {
  stylelist: {},
  isInputFormOpened: false,
};

export const buttonReducer = (state = initialButtonState, action : ActionType | any) => {
  switch (action.type) {
    case INPUT_ON:
      return { ...state, isInputFormOpened: true };
    case INPUT_OFF:
      return { ...state, isInputFormOpened: false };

    case SET_RULE:
      state.stylelist[action.payload.name] = action.payload.value;
      return { ...state, stylelist : {...state.stylelist}};

    case DELETE_RULE:
      delete state.stylelist[action.payload]
      return {
        ...state,
        stylelist : {...state.stylelist}
      };
    case CLEAR_RULE_FIELD: return {stylelist: [], globalId: null};
    case SET_RULES_FROM_PATCH: return {stylelist: action.payload, isInputFormOpened: false}
    default:
      return {...state};
  }
};
