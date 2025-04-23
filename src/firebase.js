
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdhXKjBKc7WkEEYvL5fsuHHgOh7xlQwdE",
  authDomain: "rohit-panwar-portfolio.firebaseapp.com",
  projectId: "rohit-panwar-portfolio",
  storageBucket: "rohit-panwar-portfolio.firebasestorage.app",
  messagingSenderId: "509124815464",
  appId: "1:509124815464:web:af2575fda343cad32da9dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore()