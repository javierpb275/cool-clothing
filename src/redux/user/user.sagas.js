//Redux saga effects:
//put: puts things back into our regular Redux flow
import { takeLatest, put, all, call } from 'redux-saga/effects';

//Types:
import UserActionTypes from './user.types';

//actions:
import {
    googleSignInSuccess,
    googleSignInFailure,
  } from './user.actions';

//Firebase utils:
import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
    try {
      const {user} = yield auth.signInWithPopup(googleProvider);
      const userRef = yield call(createUserProfileDocument, user);
      const userSnapShot = yield userRef.get();
      yield put(googleSignInSuccess({id: userSnapShot.id, ...user}))
    } catch (error) {
        yield put(googleSignInFailure(error));
    }
  }

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([
      call(onGoogleSignInStart)
    ]);
  }