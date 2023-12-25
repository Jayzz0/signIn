// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZqfwbLAtotkhpJPvbIYiV8WMV3Y0yViM",
    authDomain: "signin-c2585.firebaseapp.com",
    projectId: "signin-c2585",
    storageBucket: "signin-c2585.appspot.com",
    messagingSenderId: "163675123017",
    appId: "1:163675123017:web:fe408ec41e3c62f672be98",
    measurementId: "G-5E12FG3CDQ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };