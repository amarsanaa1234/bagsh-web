
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5imCU3exp60hRt9YvLCFHBe_Ly0BD8JI",
  authDomain: "animalhospital-f996c.firebaseapp.com",
  projectId: "animalhospital-f996c",
  storageBucket: "animalhospital-f996c.appspot.com",
  messagingSenderId: "925990148922",
  appId: "1:925990148922:web:8f784bfb7c9ea60777ce03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();