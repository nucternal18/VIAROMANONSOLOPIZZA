"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserProfileDocument = exports.auth = exports.timestamp = exports.projectFirestore = exports.projectStorage = exports.convertCollectionsSnapshotToMap = void 0;

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/storage");

require("firebase/firestore");

require("firebase/auth");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
};

exports.convertCollectionsSnapshotToMap = convertCollectionsSnapshotToMap;

var createUserProfileDocument = function createUserProfileDocument(userAuth, additionalData) {
  var userRef, snapshot, displayName, email, createdAt;
  return regeneratorRuntime.async(function createUserProfileDocument$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (userAuth) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          userRef = projectFirestore.doc("users/".concat(userAuth.uid));
          _context.next = 5;
          return regeneratorRuntime.awrap(userRef.get());

        case 5:
          snapshot = _context.sent;

          if (snapshot.exists) {
            _context.next = 17;
            break;
          }

          displayName = userAuth.displayName, email = userAuth.email;
          createdAt = new Date();
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap(userRef.set(_objectSpread({
            displayName: displayName,
            email: email,
            createdAt: createdAt
          }, additionalData)));

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](9);
          console.log("error creating user ", _context.t0.message);

        case 17:
          return _context.abrupt("return", userRef);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 14]]);
}; // Initialize Firebase


exports.createUserProfileDocument = createUserProfileDocument;
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
exports.auth = auth;
var projectStorage = firebase.storage();
exports.projectStorage = projectStorage;
var projectFirestore = firebase.firestore();
exports.projectFirestore = projectFirestore;
var timestamp = firebase.firestore.FieldValue.serverTimestamp;
exports.timestamp = timestamp;