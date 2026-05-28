// ================= FIREBASE IMPORTS =================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ================= FIREBASE CONFIG =================

// REPLACE WITH YOUR OWN FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ================= INITIALIZE FIREBASE =================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// ================= HTML ELEMENTS =================

const productsContainer = document.getElementById(
  "products-container"
);

const cartCount = document.getElementById(
  "cart-count"
);

let cart = 0;

// ================= FETCH PRODUCTS =================

async function loadProducts() {

  try {

    const querySnapshot = await getDocs(
      collection(db, "products")
    );

    let productsHTML = "";

    querySnapshot.forEach((doc) => {

      const product = doc.data();

      productsHTML += `

        <div class="product-card">

          <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"
          />

          <div class="product-content">

            <h3 class="product-name">
              ${product.name}
            </h3>

            <p class="product-description">
              ${product.description}
            </p>

            <div class="product-buttons">

              <button class="buy-btn">

                Buy

                <span class="price-tag">
                  $${product.buyPrice}
                </span>

              </button>

              <button class="exchange-btn">

                Exchange

                <span class="price-tag">
                  $${product.exchangePrice}
                </span>

              </button>

            </div>

          </div>

        </div>

      `;
    });

    // Duplicate for infinite moving effect
    productsContainer.innerHTML =
      productsHTML + productsHTML;

    addButtonEvents();

  } catch (error) {

    console.error(
      "Error loading products:",
      error
    );
  }
}

// ================= BUTTON EVENTS =================

function addButtonEvents() {

  const buyButtons =
    document.querySelectorAll(".buy-btn");

  buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

      cart++;

      cartCount.innerText = cart;

      button.innerHTML = `
        Added ✔
        <span class="price-tag">
          Done
        </span>
      `;

      setTimeout(() => {

        button.innerHTML = `
          Buy
          <span class="price-tag">
            Added
          </span>
        `;

      }, 1000);
    });
  });

  // Exchange buttons

  const exchangeButtons =
    document.querySelectorAll(".exchange-btn");

  exchangeButtons.forEach((button) => {

    button.addEventListener("click", () => {

      alert(
        "Exchange request initiated!"
      );
    });
  });
}

// ================= START =================

loadProducts();