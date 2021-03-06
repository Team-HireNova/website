// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// if (firebaseConfig?.projectId) {
//   const app = initializeApp(firebaseConfig);

//   if (app.name && typeof window !== "undefined") {
//     analytics = getAnalytics();
//   }

//   db = getFirestore(app);
// }

// export { analytics, db };

// let db: Firestore;

// if (typeof window !== "undefined") {
//   const analytics = getAnalytics(app);
//   const db = getFirestore(app);
// }

// export { db };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
