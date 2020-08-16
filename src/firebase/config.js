import * as firebase from 'firebase/app';
import 'firebase/storage'; // To store purpose - storage
import 'firebase/firestore'; // Database

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzWG2AX8LyoKWqWLcU6bNVfF3PAmLqXmU",
    authDomain: "raster-firegram.firebaseapp.com",
    databaseURL: "https://raster-firegram.firebaseio.com",
    projectId: "raster-firegram",
    storageBucket: "raster-firegram.appspot.com",
    messagingSenderId: "1063430184040",
    appId: "1:1063430184040:web:87a0602a921c1f10026fdd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rasterStorage = firebase.storage();
const rasterFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { rasterStorage, rasterFireStore, timestamp };