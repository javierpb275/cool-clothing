import {takeEvery}from 'redux-saga/effects';//takeEvery listens for every action of a specific type that we pass to it
import ShopActionTypes from './shop.types'; //we are listening for specific action types

//SAGAS:

//the saga middleware runs these sagas all concurrently (run them all together in a way that does not block the execution)

//second parameter that gets run in response to takeEvery(actionType)
export function* fetchCollectionsAsync() {
    yield console.log('fetchCollectionsAsync fired!');//the function pause whenever it hits the yield
}

//this saga is gonna pause whenever a specific actions type that we want comes in:
export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}