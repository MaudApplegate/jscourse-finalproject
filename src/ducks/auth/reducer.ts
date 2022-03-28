import { ActionType, AuthActions, AuthInitialState } from "./types";

export const initialAuthState: AuthInitialState = {
  value: ''
};

export const authReducer = (state = initialAuthState, action : ActionType): AuthInitialState => {
  switch (action.type) {
    case AuthActions.SAVE_USER:
      return { value: action.payload };
    
    default:
      return {...state};
  }
};
