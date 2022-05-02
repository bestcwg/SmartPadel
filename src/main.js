import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { initializeApp } from "firebase/app";

const app = initializeApp({
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_PROJECT_BUCKET
});

createApp(App)
.use(router)
.mount('#app')
