// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAetqR2Fy_G9LpmfDXB27piUy6FMkEDbYg",
  authDomain: "uniglow-19cda.firebaseapp.com",
  databaseURL: "https://uniglow-19cda-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uniglow-19cda",
  storageBucket: "uniglow-19cda.appspot.com",
  messagingSenderId: "1063138077415",
  appId: "1:1063138077415:web:2eeb0c4749bd27e5c31042",
  measurementId: "G-PQ5NBXN0CV"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);

let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
}

export { auth, googleProvider, db, analytics, firebaseConfig }