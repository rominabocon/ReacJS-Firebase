import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDkbycHL8otqS5NU1R0b-JPdi0NcZ1kNF0",
  authDomain: "roxana-patisserie.firebaseapp.com",
  projectId: "roxana-patisserie",
  storageBucket: "roxana-patisserie.appspot.com",
  messagingSenderId: "714224220915",
  appId: "1:714224220915:web:48e3c0864ac7c0f21b9586"
};

const app = firebase.initializeApp(firebaseConfig);  

export const firestore = firebase.firestore(app)
export const TimeStamp = firebase.firestore.Timestamp;