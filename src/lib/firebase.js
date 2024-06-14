
import { initializeApp } from "firebase/app";
import { getDatabase, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

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

