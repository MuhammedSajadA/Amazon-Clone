import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1dP3HzvpuOi1vXiXiplTXb8c60pzFf_M",
    authDomain: "news-2-ybtwbm.firebaseapp.com",
    projectId: "news-2-ybtwbm",
    storageBucket: "news-2-ybtwbm.appspot.com",
    messagingSenderId: "373703597670",
    appId: "1:373703597670:web:8c4fa45d4e9bfd1e91d7a7",
    measurementId: "G-WV6J4X0C59"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };