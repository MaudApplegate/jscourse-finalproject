import { initialButtonListState } from '../ducks/buttonList/reducer';
import { initialButtonState } from '../ducks/buttonRules/reducer';

const initialState = {
  buttonRules: initialButtonState,
  buttonList: initialButtonListState,
};

export default initialState;
