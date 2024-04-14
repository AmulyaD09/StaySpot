
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4GIBKLcwro_92yNRFPmBomifzmpUl608",
  authDomain: "stayspot-d1681.firebaseapp.com",
  projectId: "stayspot-d1681",
  storageBucket: "stayspot-d1681.appspot.com",
  messagingSenderId: "887996177428",
  appId: "1:887996177428:web:6a11fc93156aee85341b01"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};

