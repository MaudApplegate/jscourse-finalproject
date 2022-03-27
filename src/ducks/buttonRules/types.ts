import { ButtonListType } from "../buttonList/types";


export type RulesListType = {
    [key: string]: string
} 

export type RulesInitialState = {
    stylelist: RulesListType,
    isInputFormOpened: boolean
}

export enum RuleActions {
    SET_RULE = 'SET_RULE',
    DELETE_RULE = 'DELETE_RULE',
    INPUT_ON = 'INPUT_ON',
    INPUT_OFF = 'INPUT_OFF',
    CLEAR_RULE_FIELD = 'CLEAR_RULE_FIELD',
    PATCH_RULES = 'PATCH_RULES'
}

export type ActionType = SetRuleType | DeleteRuleType | InputOnType | InputOffType | ClearRuleFieldType | PatchRulesType;

export type SetRuleType = {
    type: string;
    payload: {name: string, value: string}
}

export type DeleteRuleType = {
    type:string;
    payload: string
}

export type InputOnType = {
    type: string;
    payload?: any
}

export type InputOffType = {
    type: string;
    payload?: any
}

export type ClearRuleFieldType = {
    type: string;
    payload?: any
}

export type PatchRulesType = {
    type: string;
    payload: ButtonListType
}

