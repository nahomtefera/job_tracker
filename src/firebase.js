import firebase from 'firebase';
import my_keys from './config.js';

var config = {
    apiKey: my_keys.firebase_key,
    authDomain: "job-tracker-d3724.firebaseapp.com",
    databaseURL: "https://job-tracker-d3724.firebaseio.com",
    projectId: "job-tracker-d3724",
    storageBucket: "job-tracker-d3724.appspot.com",
    messagingSenderId: "439243033489"
  };
  firebase.initializeApp(config);