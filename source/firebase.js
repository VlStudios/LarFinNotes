import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZkBzMKfhV_4vCZiVdrusDRC3RysPSwXM",
  authDomain: "latnotefin.firebaseapp.com",
  databaseURL: "https://latnotefin-default-rtdb.firebaseio.com",
  projectId: "latnotefin",
  storageBucket: "latnotefin.appspot.com",
  messagingSenderId: "684507780318",
  appId: "1:684507780318:web:880a8bdabbd257548b9e4f",
  measurementId: "G-XY13760Z5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

