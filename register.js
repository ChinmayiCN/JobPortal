function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const resume = document.getElementById("resume").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Store profile in Firestore
      return firebase.firestore().collection("users").doc(user.uid).set({
        email: email,
        fullName: fullName,
        phone: phone,
        linkedin: linkedin,
        resume: resume
      });
    })
    .then(() => {
      alert("Registration successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
