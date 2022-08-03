// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCScKxDie5XNHp3ET9guSwgl_PAM2JZ1-w",
  authDomain: "student-system-1bed5.firebaseapp.com",
  databaseURL: "https://student-system-1bed5-default-rtdb.firebaseio.com",
  projectId: "student-system-1bed5",
  storageBucket: "student-system-1bed5.appspot.com",
  messagingSenderId: "709082881902",
  appId: "1:709082881902:web:dce4826a1d6626d3456b7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
