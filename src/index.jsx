import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyDbXWfzgCumsW44rNCvaWyu8Tud7RbfVag",
  authDomain: "foodierreact.firebaseapp.com",
  projectId: "foodierreact",
  storageBucket: "foodierreact.appspot.com",
  messagingSenderId: "996735585014",
  appId: "1:996735585014:web:1c738ba75f0850c718fad7"
};*/



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRESTORE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)


