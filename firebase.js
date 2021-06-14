import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCrAzDQr-2mddsEvFGsMs5D-JbZ2i-ZQD4",
  authDomain: "mindtales-491a9.firebaseapp.com",
  projectId: "mindtales-491a9",
  storageBucket: "mindtales-491a9.appspot.com",
  messagingSenderId: "860573695681",
  appId: "1:860573695681:web:1e8c2ed63a3d4bc6cc9e40",
});

export const db = app.firestore();
