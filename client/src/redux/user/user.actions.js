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

//CHECK USER SESSION:
export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
  });

//SIGN OUT:
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});
  
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});
  
export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

//SIGN UP:
export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
  });
  
  export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
  });
  
  export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
  });