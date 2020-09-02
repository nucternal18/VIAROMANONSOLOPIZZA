"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _config = require("../firebase/config");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStorage = function useStorage(file) {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      url = _useState6[0],
      setUrl = _useState6[1];

  (0, _react.useEffect)(function () {
    // references
    var storageRef = _config.projectStorage.ref(file.name);

    var collectionRef = _config.projectFirestore.collection('images');

    storageRef.put(file).on('state_changed', function (snap) {
      var percentage = snap.bytesTransferred / snap.totalBytes * 100;
      setProgress(percentage);
    }, function (err) {
      setError(err);
    }, function _callee() {
      var url, createdAt;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(storageRef.getDownloadURL());

            case 2:
              url = _context.sent;
              createdAt = (0, _config.timestamp)();
              collectionRef.add({
                url: url,
                createdAt: createdAt
              });
              setUrl(url);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  }, [file]);
  return {
    progress: progress,
    url: url,
    error: error
  };
};

var _default = useStorage;
exports["default"] = _default;