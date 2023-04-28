// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc4j9imLMrIU0plZQT5XVYTstxBVBmeHQ",
  authDomain: "the-news-dragon-c1c3d.firebaseapp.com",
  projectId: "the-news-dragon-c1c3d",
  storageBucket: "the-news-dragon-c1c3d.appspot.com",
  messagingSenderId: "116513963678",
  appId: "1:116513963678:web:b4b57609700ead6fe6458f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;