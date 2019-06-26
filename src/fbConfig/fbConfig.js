import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAqhbDmIDYelBiA5lJRfmILX-vR8hvhSN4",
    authDomain: "bolivia-b03d2.firebaseapp.com",
    databaseURL: "https://bolivia-b03d2.firebaseio.com",
    projectId: "bolivia-b03d2",
    storageBucket: "",
    messagingSenderId: "736711829178",
    appId: "1:736711829178:web:6ac5cdb17ed1178a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({timestampsInSnapshots : true});
 
 export default firebase;