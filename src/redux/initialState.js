import { initialButtonListState } from '../ducks/buttonList/reducer';
import { initialButtonPushState } from '../ducks/buttonPush/reducer';
import { initialButtonState } from '../ducks/buttonRules/reducer';

const initialState = {
  buttonRules: initialButtonState,
  buttonList: initialButtonListState,
  buttonPush: initialButtonPushState,
};

export default initialState;
