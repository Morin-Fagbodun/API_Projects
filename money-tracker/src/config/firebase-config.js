// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, getGoogleAnalyticsClientId } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7kA2k8s64_by3S1xOGxcFtfkuQo-z4yA",
  authDomain: "money-tracker-537a7.firebaseapp.com",
  projectId: "money-tracker-537a7",
  storageBucket: "money-tracker-537a7.appspot.com",
  messagingSenderId: "748774470774",
  appId: "1:748774470774:web:947a6ce16aa0cfea8c5b57",
  measurementId: "G-T7SS3RD305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
const analytics = getAnalytics(app);