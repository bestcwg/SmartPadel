<script setup>
import logoutButton from '../components/SettingsPage/logoutButton.vue'
import choose from '../components/SettingsPage/ChoseYourLevelButton.vue'
import location from '../components/SettingsPage/LocationButton.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
</script>

<template>
<body class="backG">


<div class="settings">
    <h1 class="header">Settings</h1>
    <choose></choose>
    <location></location>
    <div v-if="auth.currentUser">
        <logoutButton/>
    </div>
    <div v-else></div>
</div>
</body>
</template>

<style scoped>
.header{
    padding: 10px;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #fff;
  margin-top: 5;
  text-align: center;
  font-size: 2em;
  position: relative; top: 20px;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}

    .backG{
      font-weight: normal;
  /* iphone 13 mini height and width*/
  height: 740px;
  width: 375px;
  position: relative;
       background-image: url('../assets/images/settingBack.png');

}

</style>