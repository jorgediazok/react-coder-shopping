import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'react-coder-shop.firebaseapp.com',
  projectId: 'react-coder-shop',
  storageBucket: 'react-coder-shop.appspot.com',
  messagingSenderId: '811122623899',
  appId: '1:811122623899:web:cdd1b79c91d1723abf0d3e',
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
