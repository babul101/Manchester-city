import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDmseAsygccRUy8ci4q525GDWxpoVSS1l4",
    authDomain: "manchester-city-7c05a.firebaseapp.com",
    databaseURL: "https://manchester-city-7c05a.firebaseio.com",
    projectId: "manchester-city-7c05a",
    storageBucket: "manchester-city-7c05a.appspot.com",
    messagingSenderId: "940299888726"
  };
  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');

 export {
     firebase,
     firebaseMatches
 }