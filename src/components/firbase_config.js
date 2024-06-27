// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAB_4Zf8bVwCHT0VS8mLfKr7rPwlvNovQE",
  authDomain: "Astrogyata-a6df9.firebaseapp.com",
  projectId: "Astrogyata-a6df9",
  storageBucket: "Astrogyata-a6df9.appspot.com",
  messagingSenderId: "648031265378",
  appId: "1:648031265378:web:2d5de191dc007341b7a73b",
  measurementId: "G-KMQF8WY6LY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
