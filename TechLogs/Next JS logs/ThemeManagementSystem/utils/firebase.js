import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseUrl,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket
};
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(config);
}

export default app;