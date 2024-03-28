import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcxhB_1C_GyPC00T5xSzyvffTVaKgSm8M",
  authDomain: "facebook-clone-dac0e.firebaseapp.com",
  projectId: "facebook-clone-dac0e",
  storageBucket: "facebook-clone-dac0e.appspot.com",
  messagingSenderId: "155886334288",
  appId: "1:155886334288:web:0084f06d7d5fd0cc653c55",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { firebaseApp, db, storage };
