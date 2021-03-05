import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyChvH26tB4ijhPkUr7SDbylzyuTRQrMYBg",
  authDomain: "maranta-5570b.firebaseapp.com",
  projectId: "maranta-5570b",
  storageBucket: "maranta-5570b.appspot.com",
  messagingSenderId: "920923610916",
  appId: "1:920923610916:web:d6fd09ab2077729ca81db1",
  measurementId: "G-4M4ZCRG3L7",
});
export const getFirebase = () => {
  return app;
};
export const getFirestore = () => {
  return firebase.firestore(app);
};
