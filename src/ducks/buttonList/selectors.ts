import { StateType } from '../../redux/types';

export const buttonsListSelector = (state: StateType) => state.buttonList.data;
export const isLoadingSelector = (state: StateType) => state.buttonList.isLoading;
export const errorSelector = (state: StateType) => state.buttonList.error;
