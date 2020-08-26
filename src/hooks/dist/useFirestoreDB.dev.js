"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("../firebase/config");

var useFirestoreDB = function useFirestoreDB(objectsToAdd) {
  var collectionRef, batch;
  return regeneratorRuntime.async(function useFirestoreDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          collectionRef = _config.projectFirestore.collection("Menu");
          batch = _config.projectFirestore.batch();
          objectsToAdd.forEach(function (obj) {
            var newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj);
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(batch.commit());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = useFirestoreDB;
exports["default"] = _default;