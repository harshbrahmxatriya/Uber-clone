// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANbgU00VGy6O3fEttG5BWmswastwRX-AY",
  authDomain: "uber-next-clone-li.firebaseapp.com",
  projectId: "uber-next-clone-li",
  storageBucket: "uber-next-clone-li.appspot.com",
  messagingSenderId: "206676570056",
  appId: "1:206676570056:web:15f225ca2c3ff25b09dafd",
  measurementId: "G-BLFXL94R5Q"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }