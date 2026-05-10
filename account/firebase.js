import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFxptO2uFBcgIxLybnQ8FjDDRMcKl8lpw",
  authDomain: "batter-app-44eaf.firebaseapp.com",
  projectId: "batter-app-44eaf",
  storageBucket: "batter-app-44eaf.firebasestorage.app",
  messagingSenderId: "709751116872",
  appId: "1:709751116872:web:291c8b21604f3ad3bff47d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);