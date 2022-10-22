import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHygqMAFOlt5HgU_x3rON1Ih1zSaMc1-U",
  authDomain: "koumpo-e-commerce.firebaseapp.com",
  projectId: "koumpo-e-commerce",
  storageBucket: "koumpo-e-commerce.appspot.com",
  messagingSenderId: "1015983281772",
  appId: "1:1015983281772:web:93c344a0678ef5e649aa49"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
