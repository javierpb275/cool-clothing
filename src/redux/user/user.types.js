//These are the types for our user actions so that they are constant and we pass them to our actions and reducers:

const UserActionTypes = {
    SET_CURRENT_USER : 'SET_CURRENT_USER',
    GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
    GOOGLE_SIGN_IN_SUCCESS: 'GOOGLE_SIGN_IN_SUCCESS',
    GOOGLE_SIGN_IN_FAILURE: 'GOOGLE_SIGN_IN_FAILURE',
    EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
    EMAIL_SIGN_IN_SUCCESS: 'EMAIL_SIGN_IN_SUCCESS',
    EMAIL_SIGN_IN_FAILURE: 'EMAIL_SIGN_IN_FAILURE'
};

export default UserActionTypes;