import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDB1xbT_owp2OHRUmiPjDNiOlxmLHBV1NU",
    authDomain: "viaromaninsolopizza.firebaseapp.com",
    databaseURL: "https://viaromaninsolopizza.firebaseio.com",
    projectId: "viaromaninsolopizza",
    storageBucket: "viaromaninsolopizza.appspot.com",
    messagingSenderId: "1050968429887",
    appId: "1:1050968429887:web:c6c36ca7810436a8562f8a"
};
  
const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      items,
    };
  });


  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = projectFirestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {convertCollectionsSnapshotToMap, projectStorage, projectFirestore, timestamp, auth, createUserProfileDocument};