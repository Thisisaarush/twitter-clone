import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA-6b0RawcbYKOTp0ZC-kYuyE_muYpEYIs",
  authDomain: "twitter-clone-71ffe.firebaseapp.com",
  projectId: "twitter-clone-71ffe",
  storageBucket: "twitter-clone-71ffe.appspot.com",
  messagingSenderId: "1089873237631",
  appId: "1:1089873237631:web:2d9f12e8ca24178165d14a",
  measurementId: "G-6VQSP591TF"
};

// firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      alert('error creating user', error.message);
    }
  }
  return userRef;
}

// google signin
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
