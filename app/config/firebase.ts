import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAvSOxB8zbkKUgy3WVvKlI7nhNbBFhBR_o",
  authDomain: "afrofit-app.firebaseapp.com",
  projectId: "afrofit-app",
  storageBucket: "afrofit-app.appspot.com",
  messagingSenderId: "1066691596301",
  appId: "1:1066691596301:web:cfdaa30aab3f15052b8544",
  measurementId: "G-7HFSDBMJ75",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;
