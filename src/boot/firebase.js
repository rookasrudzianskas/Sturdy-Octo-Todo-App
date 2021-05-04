import firebase from 'firebase'
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAmFbBsmtUpBiq-tGZvlU1L5csEVoSbCUE",
  authDomain: "awesome-todo-94cbf.firebaseapp.com",
  databaseURL: "https://awesome-todo-94cbf-default-rtdb.firebaseio.com",
  projectId: "awesome-todo-94cbf",
  storageBucket: "awesome-todo-94cbf.appspot.com",
  messagingSenderId: "404145853498",
  appId: "1:404145853498:web:a33925ded629f1371e1103",
  measurementId: "G-58G4ZYCQNL"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)

let firebaseAuth = firebaseApp.auth()


export { firebaseAuth }
