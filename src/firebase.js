import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyAMrlnc8we4Kw_qeJcZcIHfY6_f7qiofQc",
  authDomain: "stocks-walaa.firebaseapp.com",
  databaseURL: "https://stocks-walaa.firebaseio.com",
  projectId: "stocks-walaa",
  storageBucket: "stocks-walaa.appspot.com",
  messagingSenderId: "536389589448",
  appId: "1:536389589448:web:0dc8d55e2df4fa503a08fd"
});

const db = firebaseApp.firestore();

export { db };
