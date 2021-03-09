import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDRql14qFRVdz20LpZ9EvARqI_JRGynuzo',
  authDomain: 'internshala-fianl-project.firebaseapp.com',
  projectId: 'internshala-fianl-project',
  storageBucket: 'internshala-fianl-project.appspot.com',
  messagingSenderId: '163275978558',
  appId: '1:163275978558:web:620f8c6ff40fcb18a31e6f',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
