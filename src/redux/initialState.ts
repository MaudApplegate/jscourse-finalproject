import { initialAuthState } from '../ducks/auth/reducer';
import { initialButtonListState } from '../ducks/buttonList/reducer';
import { initialButtonState } from '../ducks/buttonRules/reducer';

const initialState = {
  user: initialAuthState,
  buttonRules: initialButtonState,
  buttonList: initialButtonListState,
};

export default initialState;
