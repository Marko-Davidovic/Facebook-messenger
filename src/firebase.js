import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMJYDOFzWHMBEl3Q7u251VWxz4HSuWN6s",
    authDomain: "facebook-messanger-204d9.firebaseapp.com",
    projectId: "facebook-messanger-204d9",
    storageBucket: "facebook-messanger-204d9.appspot.com",
    messagingSenderId: "262391985204",
    appId: "1:262391985204:web:d53eb67c2a38c92a380661"
})

  const db = firebaseApp.firestore();

  export default db  