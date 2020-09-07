//FIREBASE:
import firebase from 'firebase/app';// This is the base import of firebase which gives us access to firestore and auth.
import 'firebase/firestore';// firestore is for the database
import 'firebase/auth';// auth is for the authentication

//My web app's Firebase configuration:
const config = {
    apiKey: "AIzaSyD_NlIw3bo0gQ33rA2ELrGPNiJeLaAmg4s",
    authDomain: "cool-clothing-db-7b987.firebaseapp.com",
    databaseURL: "https://cool-clothing-db-7b987.firebaseio.com",
    projectId: "cool-clothing-db-7b987",
    storageBucket: "cool-clothing-db-7b987.appspot.com",
    messagingSenderId: "234467415521",
    appId: "1:234467415521:web:2064a99ec38ca41363aea0",
    measurementId: "G-3YJLXHG89M"
  };

  //This function allows us to take that user auth object that we got back from our authentication library 
  //and store it inside of our database
  export const createUserProfileDocument = async () => {}


//Initialize Firebase:
firebase.initializeApp(config);


//Firebase authentication:
export const auth = firebase.auth();

//Firebase database:
export const firestore = firebase.firestore();


//This gives us access to this new GoogleAuthProvider class from the authentication library:
const provider = new firebase.auth.GoogleAuthProvider();

//Always trigger the Google pop up whenever we use this GoogleAuthProvider for authentication and sign in:
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


//In case we want the whole library:
export default firebase;