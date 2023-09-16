import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbXWfzgCumsW44rNCvaWyu8Tud7RbfVag",
  authDomain: "foodierreact.firebaseapp.com",
  projectId: "foodierreact",
  storageBucket: "foodierreact.appspot.com",
  messagingSenderId: "996735585014",
  appId: "1:996735585014:web:1c738ba75f0850c718fad7"
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


