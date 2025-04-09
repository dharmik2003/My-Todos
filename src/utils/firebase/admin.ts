// import * as admin from "firebase-admin";

// const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
//   process.env;

// if (!admin.apps.length) {
//   try {
//     admin.initializeApp({
//       credential: admin.credential.cert({
//         projectId: FIREBASE_PROJECT_ID,
//         clientEmail: FIREBASE_CLIENT_EMAIL,
//         privateKey: FIREBASE_PRIVATE_KEY
//           ? FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
//           : undefined,
//       }),
//     });
//     console.log("Firebase Admin initialized successfully");
//   } catch (error: any) {
//     console.error("Firebase admin initialization error:", error.stack);
//   }
// }

// export default admin;
