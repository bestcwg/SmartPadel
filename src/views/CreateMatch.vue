<script setup>
import Locations from '../components/Locations.vue';
import ContinueButton from '../components/ContinueButton.vue'
</script>

<template>
  <div class="createMatch">
    <h1 class="h1">Location</h1>
    <Locations></Locations>
    <div class="home-match-buttons">
    <ul>
    <ContinueButton></ContinueButton>
    </ul>
    </div>
  </div>
</template>

<style scoped>
.h1{
  color: white;
  position: relative;
right: -3cm;
bottom: -2cm;
}


    .home-match-buttons {
        position: absolute;
        padding-left: 42px;
        display: inline-block;
        vertical-align: middle;
        bottom: 150px;
    }


    .home-match-buttons ul {
        position: relative;
        left: -8.3cm;
        display: grid;
        grid-auto-rows: 100px;
        grid-auto-flow: row;
        bottom: 1cm;
    }
</style>