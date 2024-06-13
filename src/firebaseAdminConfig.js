// firebaseAdminConfig.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: "taaly-firebase",
            clientEmail: 'jay.haji041@gmail.com',
            privateKey: "potatoKey".replace(/\\n/g, '\n'),
        }),
        databaseURL: "https://taaly-firebase-default-rtdb.europe-west1.firebasedatabase.app"
    });
}

const adminAuth = admin.auth();
export { adminAuth };
