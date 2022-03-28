import { AuthInitialState } from "../ducks/auth/types";
import { ButtonInitialState } from "../ducks/buttonList/types";
import { RulesInitialState } from "../ducks/buttonRules/types";


export type StateType = {
    user: AuthInitialState;
    buttonRules: RulesInitialState;
    buttonList: ButtonInitialState;
}