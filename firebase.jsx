// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfWadD9iMtWheTwNhIKdiz4cpMff3HztQ",
  authDomain: "onestopservice-96b88.firebaseapp.com",
  projectId: "onestopservice-96b88",
  storageBucket: "onestopservice-96b88.appspot.com",
  messagingSenderId: "1075270730747",
  appId: "1:1075270730747:web:993d0b7a5d4d6387b2415e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export {app};
