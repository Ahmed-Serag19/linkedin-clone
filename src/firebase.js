import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1BVmrscCP700wcmGV6EK4gaClkw8fZ18',
  authDomain: 'linkedin-clone-ec4b3.firebaseapp.com',
  projectId: 'linkedin-clone-ec4b3',
  storageBucket: 'linkedin-clone-ec4b3.appspot.com',
  messagingSenderId: '373566361657',
  appId: '1:373566361657:web:cf65c82790faedcf4afde8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
