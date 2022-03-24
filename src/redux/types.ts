import { ButtonListStateType } from "../ducks/buttonList/types";
import { ButtonRulesStateType } from "../ducks/buttonRules/types"

export type StateType = {
    buttonRules: ButtonRulesStateType;
    buttonList: ButtonListStateType;
}