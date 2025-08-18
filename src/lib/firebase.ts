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

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, firebaseConfig };
