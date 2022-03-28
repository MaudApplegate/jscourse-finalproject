import { Dispatch } from "react";

export type ButtonListType = {
    id: string;
    name: string;
    [key: string]: string
} 

export type ButtonInitialState = {
    data: ButtonListType[];
    error: string | null;
    isLoading: boolean

}

export type DispatchThunkActionType = ( dispatch: Dispatch<ActionType>) => Promise<void>

export enum ButtonsActions {
    GET_BUTTONS_LOADING = 'GET_BUTTONS_LOADING',
    GET_BUTTONS_SUCCEED = 'GET_BUTTONS_SUCCEED',
    GET_BUTTONS_FAILED = 'GET_BUTTONS_FAILED',
    PUSH_BUTTON_SUCCEED = 'PUSH_BUTTON_SUCCEED',
    PUSH_BUTTON_FAILED = 'PUSH_BUTTON_FAILED',
    DELETE_BUTTON = 'DELETE_BUTTON',
    DELETE_BUTTON_FAILED = 'DELETE_BUTTON_FAILED',
    PATCH_BUTTON = 'PATCH_BUTTON'
}

export type ActionType = GetButtonsLoadingType | GetButtonsSucceedType | GetButtonsFailedType | PushButtonSucceed| PushButtonFailed | DeleteButton | DeleteButtonFailed | PatchButton;


export type GetButtonsLoadingType = {
    type: string;
    payload?: any

}

export type GetButtonsSucceedType = {
    type: string;
    payload: ButtonListType[]

}

export type GetButtonsFailedType = {
    type: string;
    payload: string 

}

export type PushButtonSucceed = {
    type: string;
    payload?: any

}

export type PushButtonFailed = {
    type: string;
    payload: string

}

export type DeleteButton = {
    type: string;
    payload?: any

}

export type DeleteButtonFailed = {
    type: string;
    payload: string

}

export type PatchButton = {
    type: string;
    payload?: any

}

