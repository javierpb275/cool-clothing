//These are the actions (functions that return objects) related to our user.

//TYPES:
import { UserActionTypes } from './user.types'

//This action sets our current user:
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});