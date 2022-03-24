import { pushButton } from '../../services/api/api';
import { getButtonsAction } from '../buttonList/actions';

export const PUSH_BUTTON_SUCCEED = 'PUSH_BUTTON_SUCCEED';

export const ACTION_PUSH_BUTTON_SUCCEED = () => ({
  type: PUSH_BUTTON_SUCCEED,
});

export const PUSH_BUTTON_FAILED = 'PUSH_BUTTON_FAILED';

export const ACTION_PUSH_BUTTON_FAILED = () => ({
  type: PUSH_BUTTON_FAILED,
});

export const pushButtonAction = (data) => async (dispatch) => {
  await pushButton(data)
    .then(dispatch(ACTION_PUSH_BUTTON_SUCCEED()))

    .catch((error) => {
      dispatch(ACTION_PUSH_BUTTON_FAILED(error));
    });

  dispatch(getButtonsAction());
};
