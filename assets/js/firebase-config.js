// assets/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } 
       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnhUGesukKWMQ5EyKuVU3WLeQeVfTXds4",
  authDomain: "beu-shop-c8b5c.firebaseapp.com",
  projectId: "beu-shop-c8b5c",
  storageBucket: "beu-shop-c8b5c.firebasestorage.app",
  messagingSenderId: "876278462311",
  appId: "1:876278462311:web:05b2c44674fe381cfd61c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, where, orderBy };