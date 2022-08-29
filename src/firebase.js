// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt5Zw-gTj97_p7K_1bIdBW2h_TebivP0I",
  authDomain: "react-firebase-fe621.firebaseapp.com",
  projectId: "react-firebase-fe621",
  storageBucket: "react-firebase-fe621.appspot.com",
  messagingSenderId: "744410123252",
  appId: "1:744410123252:web:09f673b99b6564a23fc7a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)