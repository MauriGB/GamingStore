// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcfUdrWNoNivfe3pVnJ4f6Pn51kgTpxrI",
  authDomain: "gamingstore-df5f6.firebaseapp.com",
  projectId: "gamingstore-df5f6",
  storageBucket: "gamingstore-df5f6.appspot.com",
  messagingSenderId: "776994243456",
  appId: "1:776994243456:web:3f5daa187ad442d33ff765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);