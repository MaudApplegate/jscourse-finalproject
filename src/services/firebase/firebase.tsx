import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB6Ag6wywYRvx47Y4y8-cZ_vpaHZ3g7lZg',
  authDomain: 'finalproject-tms.firebaseapp.com',
  projectId: 'finalproject-tms',
  storageBucket: 'finalproject-tms.appspot.com',
  messagingSenderId: '643607499847',
  appId: '1:643607499847:web:8597484898c575d2c8cd62',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
