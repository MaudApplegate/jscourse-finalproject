import { ButtonListType } from "../buttonList/types";
import { ClearRuleFieldType, DeleteRuleType, InputOffType, InputOnType, PatchRulesType, RuleActions, SetRuleType } from "./types";

export const ACTION_SET_RULE = (payload: {name: string, value: string}): SetRuleType => ({
  type: RuleActions.SET_RULE,
  payload
})

export const ACTION_DELETE_RULE = (payload: string): DeleteRuleType => ({
  type: RuleActions.DELETE_RULE,
  payload
})

export const ACTION_INPUT_ON = (): InputOnType => ({
  type: RuleActions.INPUT_ON
})

export const ACTION_INPUT_OFF = (): InputOffType => ({
  type: RuleActions.INPUT_OFF
})

export const ACTION_CLEAR_RULE_FIELD = (): ClearRuleFieldType => ({
  type: RuleActions.CLEAR_RULE_FIELD
})

export const ACTION_PATCH_RULES = (payload: ButtonListType): PatchRulesType => ({
  type: RuleActions.PATCH_RULES,
  payload
})
