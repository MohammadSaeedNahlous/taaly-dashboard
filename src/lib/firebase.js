
import { initializeApp } from "firebase/app";
import { getDatabase, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD6JYtXLSmenp2XpAaLCB1PVy6IzQtixYs",
    authDomain: "taaly-firebase.firebaseapp.com",
    databaseURL: "https://taaly-firebase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "taaly-firebase",
    storageBucket: "taaly-firebase.appspot.com",
    messagingSenderId: "1046895294037",
    appId: "1:1046895294037:web:e8c3f82ea4e1fa711346dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


export { db, auth }
export default app

