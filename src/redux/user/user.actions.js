//These are the actions (functions that return objects) related to our user.

//TYPES:
import UserActionTypes from './user.types'

//GOOGLE SIGN IN START:
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

//EMAIL SIGN IN START:
export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  });

//SIGN IN SUCCESS AND FAILURE (with google or email):
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});
  
export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});