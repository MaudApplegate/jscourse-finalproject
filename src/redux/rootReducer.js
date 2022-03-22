import { buttonsListReducer } from '../ducks/buttonList/reducer';
import { buttonReducer } from '../ducks/buttonRules/reducer';

const rootReducer = {
  buttonRules: buttonReducer,
  buttonList: buttonsListReducer,
};

export default rootReducer;
