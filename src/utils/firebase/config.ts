// import * as admin from 'firebase-admin';

// const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env;

// if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
//   throw new Error("Missing Firebase environment variables: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, or FIREBASE_PRIVATE_KEY");
// }

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: FIREBASE_PROJECT_ID,
//       clientEmail: FIREBASE_CLIENT_EMAIL,
//       privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//     }),
//   });
// }

// export default admin;

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBgADB3lmLd11P76QcXacVUpAwgGC6iNCs",
//   authDomain: "my-todos-7bff9.firebaseapp.com",
//   projectId: "my-todos-7bff9",
//   storageBucket: "my-todos-7bff9.firebasestorage.app",
//   messagingSenderId: "329827603392",
//   appId: "1:329827603392:web:aecf539df3405fefb6ee25"
// };

// const app = initializeApp(firebaseConfig);