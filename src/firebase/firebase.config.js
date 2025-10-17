// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc9e52RTkxQDjRbBMLr-5ruEpYSWJztjw",
  authDomain: "fir-fighter-aa098.firebaseapp.com",
  projectId: "fir-fighter-aa098",
  storageBucket: "fir-fighter-aa098.firebasestorage.app",
  messagingSenderId: "395347895475",
  appId: "1:395347895475:web:5f8fbd697dd80eb4d1fcc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
