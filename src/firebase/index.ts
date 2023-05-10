import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABFMI44SnT5IJxZOOpaUxIIA0ZcG2jqAY',
  authDomain: 'dukastv-9efab.firebaseapp.com',
  projectId: 'dukastv-9efab',
  storageBucket: 'dukastv-9efab.appspot.com',
  messagingSenderId: '966993409164',
  appId: '1:966993409164:web:883af69da207ab950af7a9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firebase Data Base
export const db = getFirestore(app);
