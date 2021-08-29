// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-6b0RawcbYKOTp0ZC-kYuyE_muYpEYIs",
  authDomain: "twitter-clone-71ffe.firebaseapp.com",
  projectId: "twitter-clone-71ffe",
  storageBucket: "twitter-clone-71ffe.appspot.com",
  messagingSenderId: "1089873237631",
  appId: "1:1089873237631:web:2d9f12e8ca24178165d14a",
  measurementId: "G-6VQSP591TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);