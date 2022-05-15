<script setup>
import logoutButton from '../components/SettingsPage/logoutButton.vue'
import choose from '../components/SettingsPage/ChoseYourLevelButton.vue'
import location from '../components/SettingsPage/LocationButton.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
</script>

<template>
<div class="settings">
    <h1 class="header">Settings</h1>
    <choose></choose>
    <location></location>
    <div v-if="auth.currentUser">
        <logoutButton/>
    </div>
    <div v-else></div>
</div>
</template>

<style scoped>
.header{
    color: white;
    position: relative;
    right: -3.5cm;
    top: 1.5cm;
}

</style>