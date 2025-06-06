// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhQDnkVmKgQ7Zu5tlxoIS7JuynwmylpLU",
  authDomain: "my-portfolio-c1a5c.firebaseapp.com",
  projectId: "my-portfolio-c1a5c",
  storageBucket: "my-portfolio-c1a5c.appspot.com",
  messagingSenderId: "415105004341",
  appId: "1:415105004341:web:09e74f85685dcdb89ed27c",
  measurementId: "G-JSHL1Y7Z0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
