// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLKaZQlda6Py1CxZTEbeJr78JGqWmvns0",
  authDomain: "smartpadel-56d48.firebaseapp.com",
  projectId: "smartpadel-56d48",
  storageBucket: "smartpadel-56d48.appspot.com",
  messagingSenderId: "548205889436",
  appId: "1:548205889436:web:d7e0e9be1f2a721ed4ea59",
  measurementId: "G-KGBZR1K4WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }