import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAFLDxF67EWaMNz9Mw_Y_qE_X0DNN5jVs",
  authDomain: "lunascape-joc-issuer-dev.firebaseapp.com",
  projectId: "lunascape-joc-issuer-dev",
  storageBucket: "lunascape-joc-issuer-dev.appspot.com",
  messagingSenderId: "744077643605",
  appId: "1:744077643605:web:7f8769858577adcd7ea9dc",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/cloudkms");
