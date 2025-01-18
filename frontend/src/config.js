
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCefp1jmIxilI-ZljnBNjrWL3KZQCjf8v8",
  authDomain: "daily-delights-32e8a.firebaseapp.com",
  projectId: "daily-delights-32e8a",
  storageBucket: "daily-delights-32e8a.firebasestorage.app",
  messagingSenderId: "937575477728",
  appId: "1:937575477728:web:cb71e65e435342a0f67b85",
  measurementId: "G-F853D7PSQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };