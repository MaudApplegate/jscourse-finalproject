export type GetButtonsLoadingType = {
    type: string;
    payload?: null

}

export type GetButtonsSucceedType = {
    type: string;
    payload: ButtonList[]

}

export type GetButtonsFailedType = {
    type: string;
    payload: string

}

export type ButtonListStateType =  { 
    // data :  ButtonList[] | null | string | undefined ;
    // data: ButtonList[];
    data: any;
    error: string | null | undefined | Array<any>; 
    isLoading: boolean}



export type ButtonList = {
    id: string;
    name: string;
    [key: string]: string
}


export type ActionType =  GetButtonsSucceedType | GetButtonsLoadingType | GetButtonsFailedType