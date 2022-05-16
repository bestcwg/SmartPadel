<script setup>
import Locations from '../components/LocationPage/Locations.vue';
import ContinueButton from '../components/LocationPage/ContinueButton.vue'
import logo from '../components/DatePage/Logo.vue'
</script>

<template>
<body class="backG">
  <div class="createMatch">
    <logo></logo>
    <h1 class="h1">Location</h1>
    <Locations class="locations"/>
    <div>
    <ul class="continue">
    <ContinueButton/>
    </ul>
    </div>
  </div>
  </body>
</template>

<style scoped>

.backG{
        font-weight: normal;
  /* iphone 13 mini height and width*/
  height: 730px;
  width: 375px;
  position: relative;
       background: linear-gradient(180.02deg, #1B8E87 0.02%, #FFFFFF 92.97%);
}

.h1{
   padding: 10px;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #fff;
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

.locations {
  position: absolute;
  padding-left: 0px;
  display: inline-block;
  vertical-align: middle;
  bottom: 275px;
  right: 1.5cm;
}


.continue{
  position: relative;
  left: 1.1cm;
  display: grid;
  grid-auto-rows: 100px;
  grid-auto-flow: row;
  bottom: -14cm;
  cursor: pointer;
}
</style>