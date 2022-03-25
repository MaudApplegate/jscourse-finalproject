import { INPUT_ON, INPUT_OFF, SET_RULE, DELETE_RULE, CLEAR_RULE_FIELD,  SET_ID_FROM_SERVER } from './actions';
import { ActionType, ButtonRulesStateType, StylelistType } from './types';

export const initialButtonState: ButtonRulesStateType = {
  stylelist: [],
  isInputFormOpened: false,
  globalId: null
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
    case CLEAR_RULE_FIELD: return {stylelist: [], globalId: null};
    // case SET_RULES_FROM_PATCH: return {stylelist: [action.payload], isInputFormOpened: false}
    case SET_ID_FROM_SERVER: return {...state, globalId: action.payload}
    default:
      return {...state};
  }
};
