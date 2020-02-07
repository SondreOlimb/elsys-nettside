import firebase from "firebase";

const config = {
  apiKey: "AIzaSyArbzbL-IzJtEaqfRCPuOhP5sMGbsuc2bE",
  authDomain: "elsys-266317.firebaseapp.com",
  databaseURL: "https://elsys-266317.firebaseio.com",
  projectId: "elsys-266317",
  storageBucket: "elsys-266317.appspot.com",
  messagingSenderId: "939792803323",
  appId: "1:939792803323:web:974676fc3f15beeb0e175e",
  measurementId: "G-XJF2J09B8J"
};
// Initialize Firebase

firebase.initializeApp(config);

export default firebase;
