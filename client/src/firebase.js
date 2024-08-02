// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "canopy-89979.firebaseapp.com",
  projectId: "canopy-89979",
  storageBucket: "canopy-89979.appspot.com",
  messagingSenderId: "266727843848",
  appId: "1:266727843848:web:d2972d8e10440785c609bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);