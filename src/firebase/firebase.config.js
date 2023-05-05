// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4PiVpwMsx0uH4pApeM8Hb7mI4lZwvRjg",
  authDomain: "chef-recipe-hunter-86099.firebaseapp.com",
  projectId: "chef-recipe-hunter-86099",
  storageBucket: "chef-recipe-hunter-86099.appspot.com",
  messagingSenderId: "929412207512",
  appId: "1:929412207512:web:eb00cd9688fe97dcf9d1ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;