//This is the base reducer that represents all of the state of our app, the overall reducer base on all of the reducers that it pulls in. 
//This is the code that combines all of our other states (reducers) together.

import { combineReducers } from 'redux';//combineReducers, as the name suggest, combines all of our reducers together.

//REDUCERS:
import userReducer from './user/user.reducer';