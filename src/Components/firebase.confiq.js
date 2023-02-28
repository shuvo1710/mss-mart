import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBvEk10YPR8ctuBlPijyp3du0SZOUxeMGs",
  authDomain: "mss-mart.firebaseapp.com",
  projectId: "mss-mart",
  storageBucket: "mss-mart.appspot.com",
  messagingSenderId: "715776522382",
  appId: "1:715776522382:web:eaf5ef8de9a711ffa831df",
  measurementId: "G-K6GT9GKR9G"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;