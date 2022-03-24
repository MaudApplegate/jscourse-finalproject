import { StateType } from "../../redux/types";


export const isInputFormOpenedSelector = (state: StateType) =>
  state.buttonRules.isInputFormOpened;
export const stylelistSelector = (state: StateType) => state.buttonRules.stylelist;
