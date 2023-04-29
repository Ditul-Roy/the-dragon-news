// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_PIKEY,
  authDomain: import.meta.env.VITE_UTHDOMAIN,
  projectId: import.meta.env.VITE_ROJECTID,
  storageBucket: import.meta.env.VITE_TORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_ESSAGINGSENDERID,
  appId: import.meta.env.VITE_PPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;