import firebase from 'firebase';
/*we require firestore in this application. We are doing this because firestore is not installed by 
default when we import firebase from firebase.*/
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDpRzKVb72hkvTIqST-MeB_RxoYvZ8tslY",
  authDomain: "groceryapp-fe7e1.firebaseapp.com",
  projectId: "groceryapp-fe7e1",
  storageBucket: "groceryapp-fe7e1.appspot.com",
  messagingSenderId: "255496561792",
  appId: "1:255496561792:web:fb66254967ab44700eb265"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
  //this if statement below is used to avoid duplication or use of same app config by anyone else.
  if(!firebase.apps.length){
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  /*exporting this configuration so that it can be used by importing it wherever we want to make use of the 
  database */
  export default firebase.firestore();