import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeQFKpzg1mb3br56dz0dKLzQTuPbZzN2Q",
  authDomain: "yurt-add90.firebaseapp.com",
  databaseURL: "https://yurt-add90-default-rtdb.firebaseio.com",
  projectId: "yurt-add90",
  storageBucket: "yurt-add90.appspot.com",
  messagingSenderId: "595011083785",
  appId: "1:595011083785:web:f64823cae38420326be2d8",
  measurementId: "G-GCFV1DBC8Y",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
