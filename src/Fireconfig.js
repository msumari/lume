import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCIHy9BENpSCSXwZcDl8EuLeHQEhAzZFgo",
  authDomain: "lume-a6ab6.firebaseapp.com",
  projectId: "lume-a6ab6",
  storageBucket: "lume-a6ab6.appspot.com",
  messagingSenderId: "673589975791",
  appId: "1:673589975791:web:d9fbe316bc25e0da4fd91a",
  measurementId: "G-N427FY21FM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
