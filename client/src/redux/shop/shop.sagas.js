//takeEvery listens for every action of a specific type that we pass to it
//takeLatest: we only wanna use this API call one time. 
//call is the effect inside of our generator function that invokes the method
//put is the saga effect for creating actions
import {takeLatest, call, put, all}from 'redux-saga/effects';
import ShopActionTypes from './shop.types'; //we are listening for specific action types

//FIRESTORE
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

//ACTIONS:
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

//SAGAS:

//the saga middleware runs these sagas all concurrently (run them all together in a way that does not block the execution)

//second parameter that gets run in response to takeEvery(actionType)
export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();//the function pause whenever it hits the yield
        //call is a method that takes as its first argument some function and the subsequent arguments will be the parameters that you pass into this function
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}


//this saga is gonna pause whenever a specific actions type that we want comes in:
export function* fetchCollectionsStart() {
    //We only wanna use this API call one time. The last one is gonna get the most up to date data from our database. 
    //Using takeLatest is the best option
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
  }