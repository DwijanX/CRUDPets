import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_NGz6E_iIysvrQYqviM5-71p-eUH7UYo",
  authDomain: "petsdb-10411.firebaseapp.com",
  projectId: "petsdb-10411",
  storageBucket: "petsdb-10411.appspot.com",
  messagingSenderId: "833155713170",
  appId: "1:833155713170:web:99ec81719984a4eb9b3e4b"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db