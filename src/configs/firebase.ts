import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "project-1-d169a.firebaseapp.com",
  projectId: "project-1-d169a",
  storageBucket: "project-1-d169a.firebasestorage.app",
  messagingSenderId: "966622567055",
  appId: "1:966622567055:web:1bfa064ca3ffcca9dcaefa",
  measurementId: "G-QX2LTS96XT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
