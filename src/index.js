import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import firebase from 'firebase/compat/app';
import { Provider } from 'react-redux';
import store from './sagas/store';

firebase.initializeApp({
  apiKey: "AIzaSyB-bXyy75f7RIT1JuwUdNk5EkqqYoKORxs",
  authDomain: "react-project-firebase-b7db3.firebaseapp.com",
  databaseURL: "https://react-project-firebase-b7db3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-project-firebase-b7db3",
  storageBucket: "react-project-firebase-b7db3.appspot.com",
  messagingSenderId: "515018556636",
  appId: "1:515018556636:web:e5fb4e3014915d8fd1e019"
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode >
  </Provider>
);