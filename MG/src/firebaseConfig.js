// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Realtime Database
const firebaseConfig = {
  apiKey: "AIzaSyAy8MUyBl534D3UHN0kyvjwZF4Usb97pxc",
  authDomain: "portfolio-ce79e.firebaseapp.com",
  databaseURL: "https://portfolio-ce79e-default-rtdb.firebaseio.com",
  projectId: "portfolio-ce79e",
  storageBucket: "portfolio-ce79e.firebasestorage.app",
  messagingSenderId: "81498942667",
  appId: "1:81498942667:web:0ead2d84bdf4d9c1a17f4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const realtimeDB = getDatabase(app); // Realtime Database
export { realtimeDB };
