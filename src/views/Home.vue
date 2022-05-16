<script setup>
import SearchForMatchButton from '../components/Homepage/ButtonSearchForMatch.vue'
import CreateMatchButton from '../components/Homepage/ButtonCreateMatch.vue'
import LogoPadel from '../components/Homepage/LogoPadel.vue'
</script>

<template>
    <div class="home">
        <ul>
        </ul>
        <div class="padel-logo">
            <LogoPadel />
        </div>
        <div class="home-match-buttons">
            <ul>
                <SearchForMatchButton />
                <CreateMatchButton />
            </ul>
        </div>
    </div>
</template>

<style scoped>


    .home-match-buttons {
        position: absolute;
        padding-left: 42px;
        display: inline-block;
        vertical-align: middle;
        bottom: 30px;
        z-index: 1;
    }

    .home-match-buttons ul {
        position: relative;
        display: grid;
        grid-auto-rows: 100px;
        grid-auto-flow: row;
        z-index: 1;
    }

    .home{
      font-weight: normal;
  /* iphone 13 mini height and width*/
  height: 740px;
  width: 375px;
  position: relative;
       background-image: url('@/assets/images/background.png');

}

</style>
