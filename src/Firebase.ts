import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDlhTc1UpFq8jGyKhfraMMQryBGezoLc-g",
  authDomain: "first-project-e629c.firebaseapp.com",
  projectId: "first-project-e629c",
  storageBucket: "first-project-e629c.appspot.com",
  messagingSenderId: "373251942187",
  appId: "1:373251942187:web:d59daff2b82c370c7a076e",
  measurementId: "G-TJR853XWN2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;