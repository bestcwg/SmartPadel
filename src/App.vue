<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TestFigma from './components/TestFigma.vue'
import FriendsIcon from './components/icons/navbar/IconFriends.vue'
import HomeIcon from './components/icons/navbar/IconHome.vue'
import SettingsIcon from './components/icons/navbar/IconSettings.vue'
import ProfileIcon from './components/icons/navbar/IconProfile.vue'
</script>

<template>
  <main>

    <nav>
      <ul>
        <FriendsIcon />
        <HomeIcon />
        <SettingsIcon />
        <ProfileIcon />
      </ul>
    </nav>
  </main>
  <router-view></router-view>
</template>

<style>
/* @import './assets/base.css'; */
* {
  margin: 0;
  padding: 0;
}
#app {
  font-weight: normal;
  background-image: url('@/assets/images/background.png');

  /* iphone 13 mini height and width*/
  height: 812px;
  width: 375px;
  position: relative;
}

main {

}

nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85px;
  background-color: black;
  opacity: 0.80;
}

nav ul {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  margin: 6%;
  margin-left: 55px;
  align-items: center;
}


</style>
