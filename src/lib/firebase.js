import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebaseKey from "../firebaseKey.js";

const firebaseConfig = {
  apiKey: firebaseKey.FIREBASE_KEY,
  authDomain: firebaseKey.FIREBASE_AUTH_DOMAIN,
  projectId: firebaseKey.FIREBASE_PROJECT_ID,
  storageBucket: "social-media-app-2fd47.appspot.com",
  messagingSenderId: "585133140019",
  appId: "1:585133140019:web:501cac6727b69f8851db46",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
