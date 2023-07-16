// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
//   measurementId:import.meta.env.measurementId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB75sB4xvr0dgDPbx470GsPU-91UXYBAgA",
  authDomain: "calculate-roof.firebaseapp.com",
  projectId: "calculate-roof",
  storageBucket: "calculate-roof.appspot.com",
  messagingSenderId: "811887199682",
  appId: "1:811887199682:web:0d7f982c7e4c624f50025b",
  measurementId: "G-2G10BZZ2BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, analytics};
