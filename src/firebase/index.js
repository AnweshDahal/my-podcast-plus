// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLTiKwyNk0SJnYIcjVejmNOxBGSMzJWh8",
  authDomain: "my-podcast-plus.firebaseapp.com",
  projectId: "my-podcast-plus",
  storageBucket: "my-podcast-plus.appspot.com",
  messagingSenderId: "1010499356981",
  appId: "1:1010499356981:web:c50d65d90fdfbf937b647c",
  measurementId: "G-09Y3K8EDQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);