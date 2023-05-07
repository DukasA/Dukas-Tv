import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRlut5hmoRNjpzpeo4SbGHRMRHWdTRLgM',
  authDomain: 'dukas-tv.firebaseapp.com',
  projectId: 'dukas-tv',
  storageBucket: 'dukas-tv.appspot.com',
  messagingSenderId: '696521785996',
  appId: '1:696521785996:web:28bde5998d4ea79751f1a9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
