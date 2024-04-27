
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
console.log('inside firebase config', import.meta.env.VITE_APIKEY)
const firebaseConfig = {
    apiKey: "AIzaSyCTJEwvJ4ajtd3mF0qNjl3wBLMK28_WSpI",
    authDomain: "art-auth-1a330.firebaseapp.com",
    projectId: "art-auth-1a330",
    storageBucket: "art-auth-1a330.appspot.com",
    messagingSenderId: "144394236845",
    appId: "1:144394236845:web:4b9dc8fd9cd8751d55a724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;