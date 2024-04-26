// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlnvOkJuvyTtdoSPrkz86xF4OzNgMCo98",
  authDomain: "fir-blog-22e89.firebaseapp.com",
  projectId: "fir-blog-22e89",
  storageBucket: "fir-blog-22e89.appspot.com",
  messagingSenderId: "352270173039",
  appId: "1:352270173039:web:39069cccb75bd68e5bde9a",
  measurementId: "G-PL15J9KGQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
const storage = getStorage();
export const db = getFirestore(app);
