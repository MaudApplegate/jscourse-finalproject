import { StateType } from '../../redux/types';

export const buttonsListSelector = (state: StateType) => state.buttonList.data;
