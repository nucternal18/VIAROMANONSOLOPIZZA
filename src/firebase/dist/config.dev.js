"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamp = exports.projectFirestore = exports.projectStorage = exports.convertCollectionsSnapshotToMap = void 0;

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/storage");

require("firebase/firestore");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var firebaseConfig = {
  apiKey: "AIzaSyDB1xbT_owp2OHRUmiPjDNiOlxmLHBV1NU",
  authDomain: "viaromaninsolopizza.firebaseapp.com",
  databaseURL: "https://viaromaninsolopizza.firebaseio.com",
  projectId: "viaromaninsolopizza",
  storageBucket: "viaromaninsolopizza.appspot.com",
  messagingSenderId: "1050968429887",
  appId: "1:1050968429887:web:c6c36ca7810436a8562f8a"
};

var convertCollectionsSnapshotToMap = function convertCollectionsSnapshotToMap(collections) {
  var transformedCollection = collections.docs.map(function (doc) {
    var _doc$data = doc.data(),
        title = _doc$data.title,
        items = _doc$data.items;

    return {
      id: doc.id,
      title: title,
      items: items
    };
  });
  return transformedCollection.reduce(function (accumulator, collection) {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}; // Initialize Firebase


exports.convertCollectionsSnapshotToMap = convertCollectionsSnapshotToMap;
firebase.initializeApp(firebaseConfig);
var projectStorage = firebase.storage();
exports.projectStorage = projectStorage;
var projectFirestore = firebase.firestore();
exports.projectFirestore = projectFirestore;
var timestamp = firebase.firestore.FieldValue.serverTimestamp;
exports.timestamp = timestamp;