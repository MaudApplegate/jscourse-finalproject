import { getButtons, pushButton } from '../../services/api/api';

export const GET_BUTTONS_LOADING = 'GET_BUTTONS_LOADING';
export const GET_BUTTONS_SUCCEED = 'GET_BUTTONS_SUCCEED';
export const GET_BUTTONS_FAILED = 'GET_BUTTONS_FAILED';

export const ACTION_GET_BUTTONS_LOADING = () => ({
  type: GET_BUTTONS_LOADING,
});

export const ACTION_GET_BUTTONS_SUCCEED = (payload) => ({
  type: GET_BUTTONS_SUCCEED,
  payload,
});

export const ACTION_GET_BUTTONS_FAILED = (error) => ({
  type: GET_BUTTONS_FAILED,
  error,
});

export const getButtonsAction = () => async (dispatch) => {
  dispatch(ACTION_GET_BUTTONS_LOADING());
  try {
    const data = await getButtons();
    dispatch(ACTION_GET_BUTTONS_SUCCEED(data));
  } catch (error) {
    dispatch(ACTION_GET_BUTTONS_FAILED(error));
  }
};

// export const PUSH_BUTTON_SUCCEED = 'PUSH_BUTTON_SUCCEED';

// export const ACTION_PUSH_BUTTON_SUCCEED = () => ({
//   type: PUSH_BUTTON_SUCCEED,
// });

// export const PUSH_BUTTON_FAILED = 'PUSH_BUTTON_FAILED';

// export const ACTION_PUSH_BUTTON_FAILED = () => ({
//   type: PUSH_BUTTON_FAILED,
// });

// export const pushButtonAction = (data) => async (dispatch) => {
//   await pushButton(data)
//     .then(dispatch(ACTION_PUSH_BUTTON_SUCCEED()))
//     .catch((error) => {
//       dispatch(ACTION_PUSH_BUTTON_FAILED(error));
//     });
// };
