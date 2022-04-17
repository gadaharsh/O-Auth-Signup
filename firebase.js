// import * as firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5B50CwfNI4wnPQj6lUgcniWU8I1dP8WE",
  authDomain: "oauthsignup-33c26.firebaseapp.com",
  projectId: "oauthsignup-33c26",
  storageBucket: "oauthsignup-33c26.appspot.com",
  messagingSenderId: "58546763613",
  appId: "1:58546763613:web:e887cc6c345ae12af85ab4",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth()

// export {auth};

