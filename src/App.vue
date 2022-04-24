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

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.SearchForMatchButton {

position: absolute;
width: 284px;
height: 64px;
left: 45px;
top: 540px;

background: #1B8E87;
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;


/* SEARCH FOR MATCH */

position: absolute;
left: 0.35%;
right: 13.38%;
top: 35%;
bottom: 0%;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 18px;
text-align: center;

color: #FFFFFF;

border: 1px solid rgba(0, 0, 0, 0.5);


/* ball 1 */

position: absolute;
left: 76.06%;
right: 13.38%;
top: 25%;
bottom: 25%;

background: url(ball.png);
mix-blend-mode: normal;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
