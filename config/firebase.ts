// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBf4_RXutueW6GbeqGbPobkzil9nOzQZk",
  authDomain: "expense-tracker-5af4d.firebaseapp.com",
  projectId: "expense-tracker-5af4d",
  storageBucket: "expense-tracker-5af4d.firebasestorage.app",
  messagingSenderId: "889503389257",
  appId: "1:889503389257:web:77bb66bed6d5ab8cd0d198",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

// db

export const firestore = getFirestore(app)
