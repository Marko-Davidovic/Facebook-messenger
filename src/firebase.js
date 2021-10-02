import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCV6jgOzUY0QaKHtfsRnZLL8tH7YRQnnvc",
	authDomain: "facebook-messages-clone.firebaseapp.com",
	projectId: "facebook-messages-clone",
	storageBucket: "facebook-messages-clone.appspot.com",
	messagingSenderId: "870414052955",
	appId: "1:870414052955:web:3aa98271214170b048597e",
	measurementId: "G-B25YVQBML4"
})

const db = firebaseApp.firestore();

export default db