const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBgq2RLW6EnLfB4abXRv7Yr3TM57DStb_4",
  authDomain: "nootropic-ifrn.firebaseapp.com",
  projectId: "nootropic-ifrn",
  storageBucket: "nootropic-ifrn.appspot.com",
  messagingSenderId: "582508503729",
  appId: "1:582508503729:web:b1c923360e63d8b15d3890"
};

const app = initializeApp(firebaseConfig);

module.exports = app;