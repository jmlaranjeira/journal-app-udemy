import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_CONFIG_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_CONFIG_APPID
};

// const firebaseConfigTest = {
//   apiKey: "AIzaSyCd9dLsxd6cJTdDxz5gjgXbjx8S8MX_iWQ",
//   authDomain: "react-app-udemy-2e1fd.firebaseapp.com",
//   databaseURL: "https://react-app-udemy-2e1fd-default-rtdb.firebaseio.com",
//   projectId: "react-app-udemy-2e1fd",
//   storageBucket: "react-app-udemy-2e1fd.appspot.com",
//   messagingSenderId: "1031071313359",
//   appId: "1:1031071313359:web:98e5f7ae7c92195b2cb6ba"
// };

// if( process.env.NODE_ENV === 'test') {
//   // testing
//   firebase.initializeApp(firebaseConfigTest);
// } else {
//   // des / production
//   firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}