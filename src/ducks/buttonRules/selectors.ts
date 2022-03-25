import { StateType } from "../../redux/types";


export const isInputFormOpenedSelector = (state: StateType) =>
  state.buttonRules.isInputFormOpened;
export const stylelistSelector = (state: StateType) => state.buttonRules.stylelist;
export const globalIdSelector = (state: StateType) => state.buttonRules.globalId;
