import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7yRMEqOfQrABodr4WpxdSSJYmPpa3aXs",
  authDomain: "clone-59bff.firebaseapp.com",
  projectId: "clone-59bff",
  storageBucket: "clone-59bff.appspot.com",
  messagingSenderId: "1091702805396",
  appId: "1:1091702805396:web:3f583c1f71d65fc5693581"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth(); // Get the authentication instance

export { app, auth }; 