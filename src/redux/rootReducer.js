import { buttonsListReducer } from '../ducks/buttonList/reducer';
import { buttonPushReducer } from '../ducks/buttonPush/reducer';
import { buttonReducer } from '../ducks/buttonRules/reducer';

const rootReducer = {
  buttonRules: buttonReducer,
  buttonList: buttonsListReducer,
  buttonPush: buttonPushReducer,
};

export default rootReducer;
