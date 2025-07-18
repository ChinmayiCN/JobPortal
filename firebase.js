// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyAzLQiFlulwJb7WZWxzXfqt-hw_yYhO298",
  authDomain: "jobportalapp-55c68.firebaseapp.com",
  projectId: "jobportalapp-55c68",
  storageBucket: "jobportalapp-55c68.appspot.com",
  messagingSenderId: "804040577577",
  appId: "1:804040577577:web:15457feb63e05bb1268238",
  measurementId: "G-4MWP4JC4MY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
