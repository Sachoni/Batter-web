let currentUser = null;
let profileImageUrl = "";

function showStep(step) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById("step" + step).classList.add("active");

  document.getElementById("progressBar").style.width = (step * 25) + "%";
}

// STEP 1
function createAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      currentUser = res.user;
      showStep(2);
    })
    .catch(err => alert(err.message));
}

// STEP 2
function checkUsername() {
  const username = document.getElementById("username").value;
  const status = document.getElementById("usernameStatus");

  db.collection("users").where("username", "==", username).get()
    .then(snapshot => {
      if (!snapshot.empty) {
        status.innerText = "Taken ❌";
      } else {
        status.innerText = "Available ✅";
        showStep(3);
      }
    });
}

// STEP 3
function uploadImage() {
  const file = document.getElementById("profilePic").files[0];

  if (!file) {
    showStep(4);
    return;
  }

  const ref = storage.ref("profiles/" + currentUser.uid);

  ref.put(file)
    .then(() => ref.getDownloadURL())
    .then(url => {
      profileImageUrl = url;
      showStep(4);
    });
}

// FINAL
function finishSignup() {
  const username = document.getElementById("username").value;
  const bio = document.getElementById("bio").value;
  const location = document.getElementById("location").value;

  db.collection("users").doc(currentUser.uid).set({
    email: currentUser.email,
    username,
    bio,
    location,
    profilePic: profileImageUrl,
    rating: 0,
    verified: false,
    createdAt: new Date()
  })
  .then(() => {
    alert("Account created!");
    window.location.href = "dashboard.html";
  });
}