import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAX5FyLPFzzuB4lWne6wqA8F1wBC-aCARU",
  authDomain: "kiyostore-e0aed.firebaseapp.com",
  projectId: "kiyostore-e0aed",
  storageBucket: "kiyostore-e0aed.firebasestorage.app",
  messagingSenderId: "1018123799375",
  appId: "1:1018123799375:web:7617312f3580d18c27d33a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
