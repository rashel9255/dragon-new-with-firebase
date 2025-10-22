// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC44Cdpa7UYkghYgx2CF2ZbtIEreRppsE",
    authDomain: "dragon-news-with-firebas-4c179.firebaseapp.com",
    projectId: "dragon-news-with-firebas-4c179",
    storageBucket: "dragon-news-with-firebas-4c179.firebasestorage.app",
    messagingSenderId: "759900893871",
    appId: "1:759900893871:web:fb2f5e0463791746a89a5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;