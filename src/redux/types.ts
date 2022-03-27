import { ButtonInitialState } from "../ducks/buttonList/types";
import { RulesInitialState } from "../ducks/buttonRules/types";


export type StateType = {
    buttonRules: RulesInitialState;
    buttonList: ButtonInitialState;
}