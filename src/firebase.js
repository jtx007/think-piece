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

export const traditionalSignIn = (email, password) => auth.signInWithEmailAndPassword(email, password)

export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  // Get a reference to the place in the database where a user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`)

  // Go and fetch document from that location

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error('Error creating user', error.message)
    }
  }
  return getUserDocument(user.uid)
} 
export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    return firestore.collection('users').doc(uid)
  } catch (error) {
    console.error('Error fetching user', error.message)
  }
  
}

export default firebase;
