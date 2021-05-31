import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjOUi0gwUb52bJ7A2zT1ugI6MHZLm6AmU",
  authDomain: "instagram-clone-curso-a8fd4.firebaseapp.com",
  projectId: "instagram-clone-curso-a8fd4",
  storageBucket: "instagram-clone-curso-a8fd4.appspot.com",
  messagingSenderId: "201127479801",
  appId: "1:201127479801:web:7f50304abe1259c9711528",
  measurementId: "G-8ZEKYT5CC5"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {
  db,
  auth,
  storage,
  functions
};