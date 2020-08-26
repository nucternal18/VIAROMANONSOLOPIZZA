import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {convertCollectionsSnapshotToMap, projectStorage, projectFirestore, timestamp};