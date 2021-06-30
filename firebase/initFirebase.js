import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const clientCredentials = {
  apiKey: "AIzaSyBXOY_RzLa7zzGLWsLBaLzxuW74znPAgYY",
  authDomain: "khroga-d9bb8.firebaseapp.com",
  projectId: "khroga-d9bb8",
  storageBucket: "khroga-d9bb8.appspot.com",
  messagingSenderId: "59481163308",
  appId: "1:59481163308:web:c432fa84ab7dd54a863389",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
    console.log("Firebase was successfully initiated");
  }
}
