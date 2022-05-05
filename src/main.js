import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const app = initializeApp({
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_PROJECT_BUCKET,
    apiKey: import.meta.env.VITE_APP_PROJECT_APIKEY,
    authDomain: import.meta.env.VITE_APP_PROJECT_AUTHDOMAIN,
});

export const auth = getAuth(app)
createApp(App)
.use(store)
.use(router)
.mount('#app')

