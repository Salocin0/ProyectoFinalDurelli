import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwjBTDn_aTyELDuuOQwTxVxX8-1lXncjc",
  authDomain: "tercerentregacoder.firebaseapp.com",
  projectId: "tercerentregacoder",
  storageBucket: "tercerentregacoder.appspot.com",
  messagingSenderId: "558519675227",
  appId: "1:558519675227:web:a5b37b8a1c9dd20279527e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);