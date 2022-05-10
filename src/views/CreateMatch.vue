<script setup>
import Locations from '../components/LocationPage/Locations.vue';
import ContinueButton from '../components/LocationPage/ContinueButton.vue'
</script>

<template>
  <div class="createMatch">
    <h1 class="h1">Location</h1>
    <Locations class="locations"/>
    <div>
    <ul class="continue">
    <ContinueButton/>
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

    .locations {
        position: absolute;
        padding-left: 0px;
        display: inline-block;
        vertical-align: middle;
        bottom: 400px;
        right: 2cm;
    }


    .continue{
        position: relative;
        left: 1.1cm;
        display: grid;
        grid-auto-rows: 100px;
        grid-auto-flow: row;
        bottom: -14cm;
    }
</style>