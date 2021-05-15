import { all, call } from 'redux-saga/effects';
//shop sagas:
import { fetchCollectionsStart } from './shop/shop.sagas';
//user sagas:
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart), 
        call(userSagas)
    ])
}