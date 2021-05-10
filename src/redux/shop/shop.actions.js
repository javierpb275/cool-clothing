//ACTION TYPES:
import ShopActionTypes from './shop.types';

//FIRESTORE
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

//THUNKS:
//thunk is an action creator that returns a function that gets dispatch (very similar to mapDispatchToProps). 
//it is a function that returns a function that gets dispatch in it so that whenever dispatch is called, it will fire multiple actions.

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

//This is the action that we pass into our components to begin this process
export const fetchCollectionsStartAsync = () => {
  return dispatch => {

    const collectionRef = firestore.collection('collections');
    //start fetching data:
    dispatch(fetchCollectionsStart())
    collectionRef.get().then(async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //got data successfully:
        dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    //in case there is an error we catch it:
    .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
}