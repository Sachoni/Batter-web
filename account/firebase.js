import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCe6zcYlkBlgcOllDlTreozApj24fQIdZY",
  authDomain: "batter-53f91.firebaseapp.com",
  projectId: "batter-53f91",
  storageBucket: "batter-53f91.firebasestorage.app",
  messagingSenderId: "825703034072",
  appId: "1:825703034072:web:a416764346918e6da3bbad"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);