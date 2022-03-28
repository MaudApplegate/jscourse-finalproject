import { AuthActions } from "./types"

export const ACTION_SAVE_USER = (payload: string | undefined) => ({
  type: AuthActions.SAVE_USER,
  payload
})


