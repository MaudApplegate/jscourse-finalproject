export type SetRuleType = {
    type: string;
    payload: StylelistType
}

export type DeleteRuleType = {
    type:string;
    payload: string
}

export type InputOnType = {
    type: string;
    payload?: null
}

export type InputOffType = {
    type: string;
    payload?: null
}

export type ClearRuleFieldType = {
    type: string;
    payload?: null
}

export type ButtonRulesStateType = any | {
    stylelist: StylelistType[] | Array<any> ;
    isInputFormOpened: boolean;
    
}

export type ActionType =  SetRuleType | DeleteRuleType | InputOnType | InputOffType | ClearRuleFieldType | any


export type StylelistType = {
    id: string;
    stylename: string;
    stylevalue: string;

}