//Redux saga effects:
//put: puts things back into our regular Redux flow
import { takeLatest, put, all, call } from 'redux-saga/effects';

//Types:
import UserActionTypes from './user.types';

//actions:
import {
    googleSignInSuccess,
    googleSignInFailure,
    emailSignInSuccess,
    emailSignInFailure
  } from './user.actions';

//Firebase utils:
import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';

//Sign in with google:
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

//Sign in with email:
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(emailSignInSuccess({id: userSnapShot.id, ...user}))
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

//user sagas:
export function* userSagas() {
    yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart)
    ]);
  }