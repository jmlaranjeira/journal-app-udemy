import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ULAOw080zRO7SqziGRy1LRb8w-BBGJQ",
  authDomain: "react-journalapp-udemy.firebaseapp.com",
  projectId: "react-journalapp-udemy",
  storageBucket: "react-journalapp-udemy.appspot.com",
  messagingSenderId: "822777173360",
  appId: "1:822777173360:web:d7af40268dccaba8d56bb5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}