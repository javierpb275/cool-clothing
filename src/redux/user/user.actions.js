//These are the actions (functions that return objects) related to our user.

//This action sets our current user:
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});