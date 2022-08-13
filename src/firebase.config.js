import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE_Ld5UIkvVN-2E6Lh3A3061kaopfqV3E",
  authDomain: "restaurantapp-9dd72.firebaseapp.com",
  databaseURL: "https://restaurantapp-9dd72-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-9dd72",
  storageBucket: "restaurantapp-9dd72.appspot.com",
  messagingSenderId: "524806476723",
  appId: "1:524806476723:web:9860f8df5f92089176f1c6",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
