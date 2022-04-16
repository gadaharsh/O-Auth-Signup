// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5B50CwfNI4wnPQj6lUgcniWU8I1dP8WE",
  authDomain: "oauthsignup-33c26.firebaseapp.com",
  projectId: "oauthsignup-33c26",
  storageBucket: "oauthsignup-33c26.appspot.com",
  messagingSenderId: "58546763613",
  appId: "1:58546763613:web:e887cc6c345ae12af85ab4",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth()

export {auth};