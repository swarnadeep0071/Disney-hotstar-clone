import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyB23B-MgaraguiVPIYEF7o-h9AYchyuqwU",
    authDomain: "disneyhotstarclone007.firebaseapp.com",
    projectId: "disneyhotstarclone007",
    storageBucket: "disneyhotstarclone007.firebasestorage.app",
    messagingSenderId: "66541186288",
    appId: "1:66541186288:web:eaa543eedfc80a29dfe635",
    measurementId: "G-3GH0R2J89H"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();