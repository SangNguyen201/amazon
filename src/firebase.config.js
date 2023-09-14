// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPbJ7Rce8LMsaD7vOK0BK5lK4XpvYGBwM",
    authDomain: "fir-6041a.firebaseapp.com",
    projectId: "fir-6041a",
    storageBucket: "fir-6041a.appspot.com",
    messagingSenderId: "785014794397",
    appId: "1:785014794397:web:32497f823a642d904f0c74",
    measurementId: "G-6F9Q6JN1EW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
