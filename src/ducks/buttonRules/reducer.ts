import { ActionType, RuleActions, RulesInitialState } from "./types";


export const initialButtonState: RulesInitialState = {
  stylelist: {},
  isInputFormOpened: false,
};

export const buttonReducer = (state = initialButtonState, action : ActionType): RulesInitialState => {
  switch (action.type) {
    case RuleActions.INPUT_ON:
      return { ...state, isInputFormOpened: true };
    case RuleActions.INPUT_OFF:
      return { ...state, isInputFormOpened: false };

    case RuleActions.SET_RULE:
      state.stylelist[action.payload.name] = action.payload.value;
      return { ...state, stylelist : {...state.stylelist}};

    case RuleActions.DELETE_RULE:
      delete state.stylelist[action.payload]
      return {
        ...state,
        stylelist : {...state.stylelist}
      };
    case RuleActions.CLEAR_RULE_FIELD: return initialButtonState;
    case RuleActions.PATCH_RULES: return {stylelist: action.payload, isInputFormOpened: false}
    default:
      return {...state};
  }
};
