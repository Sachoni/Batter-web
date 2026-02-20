import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAw1sqpMMBt3zxAf2NggiZsj6rhhXgnE0Y",
  authDomain: "butter-ecommerce.firebaseapp.com",
  projectId: "butter-ecommerce",
  appId: "1:936911351357:web:cb088316107eaa89778454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ------------------ Email + Password login ------------------
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "../dashboard.html"; // redirect after login
  } catch (error) {
    alert(error.message);
  }
};

// ------------------ Google login ------------------
window.googleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "../dashboard.html";
  } catch (error) {
    alert(error.message);
  }
};

// ------------------ Protect pages ------------------
onAuthStateChanged(auth, (user) => {
  if (!user && location.pathname.includes("dashboard")) {
    window.location.href = "../index.html";
  }
});

// ------------------ Logout function ------------------
window.logout = async () => {
  await signOut(auth);
  window.location.href = "../index.html";
};
