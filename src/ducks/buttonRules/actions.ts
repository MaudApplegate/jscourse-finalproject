import { DeleteRuleType, InputOffType, InputOnType, SetRuleType, StylelistType } from "./types";

export const SET_RULE = 'SET_RULE';
export const DELETE_RULE = 'DELETE_RULE';

export const ACTION_SET_RULE = (payload: StylelistType): SetRuleType => ({
  type: SET_RULE,
  payload,
});

export const ACTION_DELETE_RULE = (payload: string): DeleteRuleType => ({
  type: DELETE_RULE,
  payload,
});

export const INPUT_ON = 'INPUT_ON';
export const INPUT_OFF = 'INPUT_OFF';

export const ACTION_INPUT_ON = (): InputOnType => ({
  type: INPUT_ON,
});

export const ACTION_INPUT_OFF = (): InputOffType => ({
  type: INPUT_OFF,
});
