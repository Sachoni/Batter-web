import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, onSnapshot, query } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCe6zcYlkBlgcOllDlTreozApj24fQIdZY",
  authDomain: "batter-53f91.firebaseapp.com",
  projectId: "batter-53f91",
  storageBucket: "batter-53f91.appspot.com",
  messagingSenderId: "825703034072",
  appId: "1:825703034072:web:a416764346918e6da3bbad",
  measurementId: "G-VT7NVLXXYZ"
};

// INIT FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsContainer = document.getElementById("products");

function renderProduct(doc){
    const data = doc.data();

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${data.image}" alt="product">
        <h3>${data.productName}</h3>
        <p><b>Category:</b> ${data.category}</p>
        <p><b>Type:</b> ${data.type}</p>
        <p><b>Price:</b> KES ${data.rate}</p>
    `;

    productsContainer.appendChild(card);
}

// REAL-TIME FETCH (LIVE UPDATES)
const q = query(collection(db, "products"));

onSnapshot(q, (snapshot) => {

    productsContainer.innerHTML = "";

    snapshot.forEach((doc) => {
        renderProduct(doc);
    });

});