// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHgx_xWbL0EYROeMRcRT8aAvie0o3rXaE",
  authDomain: "finalproyectreact.firebaseapp.com",
  projectId: "finalproyectreact",
  storageBucket: "finalproyectreact.firebasestorage.app",
  messagingSenderId: "1052685975696",
  appId: "1:1052685975696:web:ee84bbeb25ccd4314b1815",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// EXPORTACIÓN DE FIRESTORE
export const db = getFirestore(app);
