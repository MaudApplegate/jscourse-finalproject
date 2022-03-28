
export type AuthInitialState = {
    value: string | undefined
}

export enum AuthActions {
    SAVE_USER = 'SAVE_USER',
}

export type ActionType = SaveUser

export type SaveUser = {
    type: string;
    payload: string | undefined
}


