// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2GnR2z5KaIqRDqDTh9m-9Dcz1LMKdp2A",
  authDomain: "job-analyze-f3b58.firebaseapp.com",
  projectId: "job-analyze-f3b58",
  storageBucket: "job-analyze-f3b58.appspot.com",
  messagingSenderId: "505959450765",
  appId: "1:505959450765:web:5e3cd0deaf284b0f49bac4",
  measurementId: "G-4FYCQHKJ9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);