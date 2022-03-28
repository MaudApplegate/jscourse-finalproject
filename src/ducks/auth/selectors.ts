import { StateType } from "../../redux/types";

export const userSelector =  (state: StateType) => state.user.value;

