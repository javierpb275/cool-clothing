//FIREBASE:
import firebase from 'firebase/app';// This is the base import of firebase which gives us access to firestore and auth.
import 'firebase/firestore';// firestore is for the database
import 'firebase/auth';// auth is for the authentication

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

firebase.initializeApp(config);