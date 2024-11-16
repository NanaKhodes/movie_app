import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "movie-app-ae6ba.firebaseapp.com",
  projectId: "movie-app-ae6ba",
  storageBucket: "movie-app-ae6ba.firebasestorage.app",
  messagingSenderId: "868391841100",
  appId: "1:868391841100:web:372e4f10890b201dcdf3e9",
  measurementId: "G-1JFX9943CX",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
