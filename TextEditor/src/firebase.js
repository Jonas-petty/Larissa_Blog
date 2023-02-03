
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCumCuqk-iqtE1tWp7Uwt7vFWR9RZyMYs0",
  authDomain: "larissa-b36e0.firebaseapp.com",
  projectId: "larissa-b36e0",
  storageBucket: "larissa-b36e0.appspot.com",
  messagingSenderId: "555065936796",
  appId: "1:555065936796:web:e870dc7136b46bb77d5659",
  measurementId: "G-C2EB5C5RM8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }