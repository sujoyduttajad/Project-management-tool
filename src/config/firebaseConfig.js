import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC9Ivq2vlZ6bfgGteLKh9WFRZ998w8qg9c",
    authDomain: "project-manager-7accb.firebaseapp.com",
    databaseURL: "https://project-manager-7accb.firebaseio.com",
    projectId: "project-manager-7accb",
    storageBucket: "project-manager-7accb.appspot.com",
    messagingSenderId: "1061572599641",
    appId: "1:1061572599641:web:c757a0f2092d8907147648",
    measurementId: "G-QKEV184MBP"
  };

  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;