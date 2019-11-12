import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAQfDO2ehYS4r4Y8M4vEkDGnP1gXo0_faU',
  appId: '1:948077670822:web:7bd09287ea87541aaadf67',
  authDomain: 'tracking-e4687.firebaseapp.com',
  databaseURL: 'https://tracking-e4687.firebaseio.com',
  messagingSenderId: '948077670822',
  projectId: 'tracking-e4687',
  storageBucket: 'tracking-e4687.appspot.com',
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
