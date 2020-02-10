import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNEHZIr8rpz_NFB4eXBUvIbsGExWNyvjk",
  authDomain: "think-piece-267322.firebaseapp.com",
  databaseURL: "https://think-piece-267322.firebaseio.com",
  projectId: "think-piece-267322",
  storageBucket: "think-piece-267322.appspot.com",
  messagingSenderId: "133391965662",
  appId: "1:133391965662:web:fee2bc18976a4c97bb914f",
  measurementId: "G-KSK9LY8GL5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;


export const firestore = firebase.firestore(); 

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
