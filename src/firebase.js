import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHAiUCS6Tts_H22aeM5gxJtPaZpMiStVk",
  authDomain: "task-management-22f15.firebaseapp.com",
  projectId: "task-management-22f15",
  storageBucket: "task-management-22f15.appspot.com",
  messagingSenderId: "609687387547",
  appId: "1:609687387547:web:a0d955efba95062ceef53e",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;