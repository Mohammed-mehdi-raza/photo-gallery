// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsYClxTNBiDA0FIFeefDpQb4fvAvKlOJg",
  authDomain: "photo-gallery-b4bf0.firebaseapp.com",
  projectId: "photo-gallery-b4bf0",
  storageBucket: "photo-gallery-b4bf0.appspot.com",
  messagingSenderId: "758164864742",
  appId: "1:758164864742:web:4dd5acbef6739016ce8527"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };