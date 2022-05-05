import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_PROJECT_BUCKET
});

export const db = getFirestore(app);