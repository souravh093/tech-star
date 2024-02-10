// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEGzTt-XCjk5EUbPLwFtj4yehEHFQm7rg",
  authDomain: "tech-star-472e5.firebaseapp.com",
  projectId: "tech-star-472e5",
  storageBucket: "tech-star-472e5.appspot.com",
  messagingSenderId: "1014477047568",
  appId: "1:1014477047568:web:10233d8e0e1d9734ef4795",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, app, storage };
