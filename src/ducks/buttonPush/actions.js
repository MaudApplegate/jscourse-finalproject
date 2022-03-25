import { deleteButton, pushButton } from '../../services/api/api';
import { getButtonsAction } from '../buttonList/actions';

export const PUSH_BUTTON_SUCCEED = 'PUSH_BUTTON_SUCCEED';

export const ACTION_PUSH_BUTTON_SUCCEED = () => ({
  type: PUSH_BUTTON_SUCCEED,
});

export const PUSH_BUTTON_FAILED = 'PUSH_BUTTON_FAILED';

export const ACTION_PUSH_BUTTON_FAILED = (error) => ({
  type: PUSH_BUTTON_FAILED,
  error,
});

export const pushButtonAction = (data) => async (dispatch) => {
  await pushButton(data)
    .then(dispatch(ACTION_PUSH_BUTTON_SUCCEED()))

    .catch((error) => {
      dispatch(ACTION_PUSH_BUTTON_FAILED(error));
    });

  dispatch(getButtonsAction());
};

export const DELETE_BUTTON = 'DELETE_BUTTON';

export const ACTION_DELETE_BUTTON = (payload) => ({
  type: DELETE_BUTTON,
  payload,
});

export const DELETE_BUTTON_FAILED = 'DELETE_BUTTON_FAILED';

export const ACTION_DELETE_BUTTON_FAILED = (error) => ({
  type: DELETE_BUTTON_FAILED,
  error,
});

export const deleteButtonAction = (id) => async (dispatch) => {
  const data = { id };
  await deleteButton(data)
    .then(dispatch(ACTION_DELETE_BUTTON()))
    .catch((error) => {dispatch(ACTION_DELETE_BUTTON_FAILED(error))});
  dispatch(getButtonsAction());
};
