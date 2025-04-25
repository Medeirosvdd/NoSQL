// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFXzDDW10WPlJ4k7JOqT4ANGxat49VRfk",
  authDomain: "gremio-maior-do-brasil.firebaseapp.com",
  databaseURL: "https://gremio-maior-do-brasil-default-rtdb.firebaseio.com",
  projectId: "gremio-maior-do-brasil",
  storageBucket: "gremio-maior-do-brasil.firebasestorage.app",
  messagingSenderId: "766012455620",
  appId: "1:766012455620:web:22989a304fbda704f82791",
  measurementId: "G-WBYMVWVB0K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db, app };
