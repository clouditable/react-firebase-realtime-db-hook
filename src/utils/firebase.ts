import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//ADD YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: '',
  appId: '',
  authDomain: '',
  databaseURL: '',
  messagingSenderId: '',
  projectId: '',
  storageBucket: '',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const setUserFbLogin = async (token: string) => {
  return await firebase
    .auth()
    .signInWithCustomToken(token)
    .catch(function(error) {
      console.log(error);
    });
};

export default app;
