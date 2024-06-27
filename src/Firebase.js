import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBlC_NapLYAJyLiVmLvP1zteaFIPPZi1v4",
  authDomain: "Astrogyataweb.firebaseapp.com",
  projectId: "Astrogyataweb",
  storageBucket: "Astrogyataweb.appspot.com",
  messagingSenderId: "757533898336",
  appId: "1:757533898336:web:065f2875fb76338fe8f505",
  measurementId: "G-Y4SWB2F03K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      // console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      // const mobile = result.user.mobile;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      // localStorage.setItem("mobile", mobile);
    })
    .catch(error => {
      console.log(error);
    });
};
