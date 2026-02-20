// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCNKw13mRo1IWmKaJ-lNy7vuPXRaIcuZWs",
  authDomain: "tradesystem-ada4d.firebaseapp.com",
  projectId: "tradesystem-ada4d",
  storageBucket: "tradesystem-ada4d.firebasestorage.app",
  messagingSenderId: "557803563021",
  appId: "1:557803563021:web:2c27a9c8b660952da24d44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
