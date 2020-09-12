//This is the store (state) of our app:

//REDUX:
import { createStore, applyMiddleware } from 'redux';

//MIDDLEWARE:
import logger from 'redux-logger';//logger (middleware) catches the action, console logs it out for us and then moves it along

//REDUCERS:
import rootReducer from './root-reducer';



//Array of middlewares:
const middlewares = [logger];


//Store:
const store = createStore(rootReducer, applyMiddleware(...middlewares));



export default store;

