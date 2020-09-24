//These are the selectors of our cart:
//Selector: code that gets a state as in the whole state object and then pulls off just a small portion or slice of that state 

//RESELECT:
import { createSelector } from 'reselect';



//selectUser input selector:
const selectUser =  state => state.user;


//selectCurrentUser output selector:
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);