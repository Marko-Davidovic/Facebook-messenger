import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAlBH9zOcnLEqibvfVCJ_fId2ShkCUBtCI",
  authDomain: "facebook-messenger-cea89.firebaseapp.com",
  databaseURL: "https://facebook-messenger-cea89.firebaseio.com",
  projectId: "facebook-messenger-cea89",
  storageBucket: "facebook-messenger-cea89.appspot.com",
  messagingSenderId: "99544821500",
  appId: "1:99544821500:web:142944bb576bb2819c7179",
  measurementId: "G-RVJY140E6Q"
})

  const db = firebaseApp.firestore();

  export default db  