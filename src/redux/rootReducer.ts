import { authReducer } from '../ducks/auth/reducer';
import { buttonsListReducer } from '../ducks/buttonList/reducer';
import { buttonReducer } from '../ducks/buttonRules/reducer';

const rootReducer = {
  user: authReducer,
  buttonRules: buttonReducer,
  buttonList: buttonsListReducer,
};

export default rootReducer;
