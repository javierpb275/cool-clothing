//This is the store (state) of our app:

//REDUX:
import { createStore, applyMiddleware } from 'redux';

//REDUX-PERSIST:
import { persistStore } from 'redux-persist';

//MIDDLEWARE:
import logger from 'redux-logger';//logger (middleware) catches the action, console logs it out for us and then moves it along
import createSagaMiddleware from 'redux-saga';//we replace thunks with redux saga to handle our asynchronous actions inside of redux.

//SAGAS:
import {fetchCollectionsStart} from './shop/shop.sagas';

//REDUCERS:
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

//Array of middlewares:
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

//Store:
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

//Persistor:
export const persistor = persistStore(store);

export default { store, persistor };

