import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBI3HT0X7jXdyA-IxqSG8qa0DukRdgVgAg",
  authDomain: "flashlearning-40f0c.firebaseapp.com",
  projectId: "flashlearning-40f0c",
  storageBucket: "flashlearning-40f0c.appspot.com",
  messagingSenderId: "562867182380",
  appId: "1:562867182380:web:07204a506c85dd68226a89",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
