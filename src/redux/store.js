//This is the store (state) of our app:

//REDUX:
import { createStore, applyMiddleware } from 'redux';

//REDUX-PERSIST:
import { persistStore } from 'redux-persist';

//MIDDLEWARE:
import logger from 'redux-logger';//logger (middleware) catches the action, console logs it out for us and then moves it along
import thunk from 'redux-thunk';//thunk is a piece of middleware that allows us to fire functions

//REDUCERS:
import rootReducer from './root-reducer';



//Array of middlewares:
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

//Store:
export const store = createStore(rootReducer, applyMiddleware(...middlewares));


//Persistor:
export const persistor = persistStore(store);



export default { store, persistor };

