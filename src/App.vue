<script setup>
import FriendsIcon from './components/icons/navbar/IconFriends.vue'
import HomeIcon from './components/icons/navbar/IconHome.vue'
import SettingsIcon from './components/icons/navbar/IconSettings.vue'
import ProfileIcon from './components/icons/navbar/IconProfile.vue'

// For testing queries of the database the little button in the left corner
// THIS CAN BE DELETED AFTER THE APP IS FINISHED
import { VueQueryDevTools } from "vue-query/devtools";
import { useQueryProvider } from 'vue-query';
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onBeforeMount(() => {
  store.dispatch('fetchUser')
})
useQueryProvider();
</script>

<template>
  <main>
    <nav>
      <ul>
        <HomeIcon />
        <ProfileIcon />
        <FriendsIcon />
        <SettingsIcon />
      </ul>
    </nav>
  </main>

  <router-view></router-view>
  <VueQueryDevTools :initialIsOpen="false" />
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
  opacity: 0.60;
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
