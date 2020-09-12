//This is the store (state) of our app:

//REDUX:
import { createStore, applyMiddleware } from 'redux';

//MIDDLEWARE:
import logger from 'redux-logger';//redux-logger (middleware) catches the action, console logs it out for us and then moves it along

//REDUCERS:
import rootReducer from './root-reducer';