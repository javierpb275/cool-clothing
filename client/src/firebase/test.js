import firebase from 'firebase/app';// This is the base import of firebase which gives us access to firestore and auth.
import 'firebase/firestore';// firestore is for the database

const firestore = firebase.firestore();

//Getting the cartItem from our database:
firestore.collection('users').doc('user').collection('cartItems').doc('cartItem');

//This does the same thing as the previous one:
firestore.doc('/users/user/cartItems/cartItem');

//This gets all the items from that user:
firestore.collection('/users/user/cartItems');