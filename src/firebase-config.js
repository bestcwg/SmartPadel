import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const app = initializeApp({
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_PROJECT_BUCKET,
    apiKey: import.meta.env.VITE_APP_PROJECT_APIKEY,
    authDomain: import.meta.env.VITE_APP_PROJECT_AUTHDOMAIN,
});

export const auth = getAuth(app)
export const db = getFirestore(app);