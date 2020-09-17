//This is the base reducer that represents all of the state of our app, the overall reducer base on all of the reducers that it pulls in. 
//This is the code that combines all of our other states (reducers) together.

//REDUX:
import { combineReducers } from 'redux';

//REDUCERS:
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//combineReducers, as the name suggest, combines all of our reducers together.
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});