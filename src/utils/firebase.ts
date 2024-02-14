import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZoJNOONbKlpveK2xljbFw0AKR1bcFBjs",
  authDomain: "auth-firebase-f59d2.firebaseapp.com",
  projectId: "auth-firebase-f59d2",
  storageBucket: "auth-firebase-f59d2.appspot.com",
  messagingSenderId: "179924345179",
  appId: "1:179924345179:web:34887603088c60936bba7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);