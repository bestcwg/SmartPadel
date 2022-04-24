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
  box-sizing: border-box;
}
#app {
  font-weight: normal;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('@/assets/images/background.png');
  /* iphone 13 mini height and width*/
  height: 812px;
  width: 375px;
  position: relative;
}

main {
  border: solid 2px black;
  

}

nav {
  border: solid 2px blue;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 6%;
  border: solid 2px blue;
}

</style>
