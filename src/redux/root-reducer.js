//This is the base reducer that represents all of the state of our app, the overall reducer base on all of the reducers that it pulls in. 
//This is the code that combines all of our other states (reducers) together.

//REDUX:
import { combineReducers } from 'redux';

//REDUX-PERSIST:
import { persistReducer } from 'redux-persist';

//STORAGE:
import storage from 'redux-persist/lib/storage';

//REDUCERS:
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};


//combineReducers, as the name suggest, combines all of our reducers together.
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});


export default persistReducer(persistConfig, rootReducer);