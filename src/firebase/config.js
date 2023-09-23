import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAqw5YQFj7PrGRWM-JYo52PjBg0cQGJ_Bw",
  authDomain: "getlinked-000.firebaseapp.com",
  projectId: "getlinked-000",
  storageBucket: "getlinked-000.appspot.com",
  messagingSenderId: "666808681350",
  appId: "1:666808681350:web:ec1751fa696cb8abbf2207",
  measurementId: "G-KL76NVVVP8"
};



const app = initializeApp(firebaseConfig);
