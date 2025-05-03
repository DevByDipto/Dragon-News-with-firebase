// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeV2ZEQez28mkFu3ddmbuT8je8_gqsZww",
  authDomain: "dragon-news-project-89c5b.firebaseapp.com",
  projectId: "dragon-news-project-89c5b",
  storageBucket: "dragon-news-project-89c5b.firebasestorage.app",
  messagingSenderId: "164524624208",
  appId: "1:164524624208:web:c7d516a306c8b6959f0455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);