// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQMdW2wHPladCTZSxvHWtqCmFaLairak0",
    authDomain: "chatapp-bbbfb.firebaseapp.com",
    projectId: "chatapp-bbbfb",
    storageBucket: "chatapp-bbbfb.appspot.com",
    messagingSenderId: "297678461147",
    appId: "1:297678461147:web:8383078d3e5acaee5114fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();