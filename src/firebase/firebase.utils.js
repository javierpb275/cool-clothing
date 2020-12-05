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
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {

        await userRef.set({
          displayName,
          email, 
          createdAt,
          ...additionalData

        })

      }

      catch(error) {

        console.log('error creating user', error.message);

      }

    }

    return userRef;

  }

  //This function creates the collection using the collectionKey. 
  //Firebase we'll make this collectionRef object for us 
  //and if we start adding elements to it as documents then 
  //firebase will start creating both the collection and the documents inside our firestore.
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);//This will give us back a ref object
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);

    });

    return await batch.commit();
    
  }

  //This function gets the whole snapshot object of our collections.
  //we wanna convert it to an object instead of the array that we get.
  //This transforms the doc objects (array of wuery snapshot documents)
  //and we'll return the right object with the right properties and our new routeName property.
  export const convertCollectionsSnapshotToMap = (collections) => {

    const transformedCollection = collections.docs.map(doc => {
      const {title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})

  }

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