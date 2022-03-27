import { Dispatch } from 'react';
import { deleteButton, getButtons, patchButton, pushButton } from '../../services/api/api';
import { ActionType, ButtonsActions, DeleteButton, DeleteButtonFailed, DispatchThunkActionType, GetButtonsFailedType, GetButtonsLoadingType, GetButtonsSucceedType, PatchButton, PushButtonFailed, PushButtonSucceed } from './types';
import { ButtonListType } from './types';

export const ACTION_GET_BUTTONS_LOADING = (): GetButtonsLoadingType => ({
  type: ButtonsActions.GET_BUTTONS_LOADING
});

export const ACTION_GET_BUTTONS_SUCCEED = (payload: ButtonListType[]) : GetButtonsSucceedType => ({
  type: ButtonsActions.GET_BUTTONS_SUCCEED,
  payload,
});

export const ACTION_GET_BUTTONS_FAILED = (error: any): GetButtonsFailedType => ({
  type: ButtonsActions.GET_BUTTONS_FAILED,
  payload: error
});

export const getButtonsAction = () => async (dispatch: Dispatch<ActionType>) => {
  dispatch(ACTION_GET_BUTTONS_LOADING());
  try {
    const data = await getButtons();
    dispatch(ACTION_GET_BUTTONS_SUCCEED(data));
  } catch (error) {
    dispatch(ACTION_GET_BUTTONS_FAILED(error));
  }
};

export const ACTION_PUSH_BUTTON_SUCCEED = (): PushButtonSucceed => ({
  type: ButtonsActions.PUSH_BUTTON_SUCCEED,
});

export const ACTION_PUSH_BUTTON_FAILED = (error : any): PushButtonFailed => ({
  type: ButtonsActions.PUSH_BUTTON_FAILED,
  payload: error,
});

export const pushButtonAction = (data: ButtonListType) => async (dispatch : Dispatch<DispatchThunkActionType | ActionType>) => {
  await pushButton(data)

  try {dispatch(ACTION_PUSH_BUTTON_SUCCEED()) }
  catch (error) {
      dispatch(ACTION_PUSH_BUTTON_FAILED(error));
    };

  dispatch(getButtonsAction());
};

export const ACTION_DELETE_BUTTON = (): DeleteButton => ({
  type: ButtonsActions.DELETE_BUTTON,
  
});

export const ACTION_DELETE_BUTTON_FAILED = (error: any): DeleteButtonFailed => ({
  type: ButtonsActions.DELETE_BUTTON_FAILED,
  payload: error,
});

export const deleteButtonAction = (id: string) => async (dispatch : Dispatch<DispatchThunkActionType | ActionType>) => {
  const data = { id };
  await deleteButton(data)

  try {dispatch(ACTION_DELETE_BUTTON())} 
  catch (error)  {dispatch(ACTION_DELETE_BUTTON_FAILED(error))}

  dispatch(getButtonsAction());
};

export const ACTION_PATCH_BUTTON = () : PatchButton => ({
  type: ButtonsActions.PATCH_BUTTON,
});

export const patchButtonAction = (data: ButtonListType) => async (dispatch : Dispatch<ActionType | DispatchThunkActionType>) => {
  await patchButton(data);
  dispatch(ACTION_PATCH_BUTTON());
  dispatch(getButtonsAction());
};

// export const GET_BUTTONS_LOADING = 'GET_BUTTONS_LOADING';
// export const GET_BUTTONS_SUCCEED = 'GET_BUTTONS_SUCCEED';
// export const GET_BUTTONS_FAILED = 'GET_BUTTONS_FAILED';

// export const ACTION_GET_BUTTONS_LOADING = () => ({
//   type: GET_BUTTONS_LOADING,
// });

// export const ACTION_GET_BUTTONS_SUCCEED = (payload: ButtonListType[]) => ({
//   type: GET_BUTTONS_SUCCEED,
//   payload,
// });

// export const ACTION_GET_BUTTONS_FAILED = (error: Error) => ({
//   type: GET_BUTTONS_FAILED,
//   error,
// });

// export const getButtonsAction = () => async (dispatch: Dispatch<ActionType>) => {
//   dispatch(ACTION_GET_BUTTONS_LOADING());
//   try {
//     const data = await getButtons();
//     dispatch(ACTION_GET_BUTTONS_SUCCEED(data));
//   } catch (error) {
//     dispatch(ACTION_GET_BUTTONS_FAILED(error as Error));
//   }
// };
