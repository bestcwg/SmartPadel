<script setup>
import Matchboard from '../components/icons/Match/Matchboard.vue'
</script>


<template>
  <div class="match">
    <h1>ddss</h1>
     <h1>MATCH</h1>
      <h2>board</h2>
      <div class="home-match-buttoms">
        <ul>
     <Matchboard />
     </ul>
     </div>
  </div>
</template>


<style scoped>
    .home-match-buttoms {
        position: absolute;
        padding-left: 0px;
        display: inline-block;
        vertical-align: middle;
        bottom: 650px;
    }

    .home-match-buttoms ul {
        display: grid;
        grid-auto-rows: 100px;
        grid-auto-flow: row;
    }
</style>

