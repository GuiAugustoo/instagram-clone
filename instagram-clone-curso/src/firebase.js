import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
  apiKey: "Sua apiKey",
  authDomain: "Seu authDomain",
  projectId: "Seu projectId",
  storageBucket: "Seu storageBucket",
  messagingSenderId: "Seu messagingSenderId",
  appId: "Seu appId",
  measurementId: "Seu measurementId"
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
