import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaJZxaeExpEgIj-ztBcwpj8oIYP5-JtaY",
  authDomain: "nurse-iq.firebaseapp.com",
  projectId: "nurse-iq",
  storageBucket: "nurse-iq.firebasestorage.app",
  messagingSenderId: "1023611617242",
  appId: "1:1023611617242:web:22fbe75baf9e73b251cae3"
};

let app: FirebaseApp;
try {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
} catch (e) {
  console.error("Firebase initialization failed", e);
  // In a real app, you might want to throw this error or handle it differently.
  // For now, we'll let it be caught by the app's error boundary.
  throw new Error("Could not initialize Firebase. Please check your configuration.");
}


const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, firebaseConfig };
