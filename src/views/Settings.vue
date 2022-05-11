<script setup>
import logoutButton from '../components/SettingsPage/logoutButton.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

</script>

<template>
<div class="settings">
    <div v-if="auth.currentUser">
        <logoutButton/>
    </div>
    <div v-else></div>
</div>

  
</template>



<style scoped>

</style>