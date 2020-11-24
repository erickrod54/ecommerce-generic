"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = exports.createUserProfileDocument = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = {
  apiKey: "AIzaSyCDNrrmmdEPn3rxaFpj_NT2jE6qwdPfF_I",
  authDomain: "crwn-db-f747a.firebaseapp.com",
  databaseURL: "https://crwn-db-f747a.firebaseio.com",
  projectId: "crwn-db-f747a",
  storageBucket: "crwn-db-f747a.appspot.com",
  messagingSenderId: "577193791093",
  appId: "1:577193791093:web:d78f1078673cb8a37ff23c"
};

var createUserProfileDocument = function createUserProfileDocument(userAuth, additionalData) {
  var userRef, snapShot, displayName, email, createdAt;
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
          userRef = firestore.doc("users/".concat(userAuth.uid));
          _context.next = 5;
          return regeneratorRuntime.awrap(userRef.get());

        case 5:
          snapShot = _context.sent;

          if (snapShot.exists) {
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
          console.log('error creating user', _context.t0.message);

        case 17:
          return _context.abrupt("return", userRef);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 14]]);
};

exports.createUserProfileDocument = createUserProfileDocument;

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;