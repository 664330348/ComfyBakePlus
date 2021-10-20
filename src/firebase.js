/* import { initializeApp } from 'firebase/app';
 */
import firebase from 'firebase';

import 'firebase/firestore';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";


var firebaseApp = {
    apiKey: "AIzaSyC4xuA39TgsvKCSaREYLWDONbVVVlv1jtk",
    authDomain: "comfybakeplus.firebaseapp.com",
    projectId: "comfybakeplus",
    storageBucket: "comfybakeplus.appspot.com",
    messagingSenderId: "112653459384",
    appId: "1:112653459384:web:9ce22071857e8450c7794d",
    measurementId: "G-GYBWGNCHN2"
};

const database = firebase.initializeApp(firebaseApp);

export default database;