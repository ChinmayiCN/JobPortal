// login.js

// ✅ LOGIN Function
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // ✅ Simple input validation
  if (email === "" || password === "") {
    alert("Please fill in both email and password.");
    return;
  }

  // ✅ Firebase login
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // ✅ Redirect on success
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

// ✅ LOGOUT Function (for navbar)
function logout() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logged out successfully.");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
}
