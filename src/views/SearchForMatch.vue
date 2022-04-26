<script setup>
import SearchForMatchBox from '../components/BoxSearchForMatch.vue';
</script>

<template>
  <div class="search-match">
    <div class="search-match-board">
      <SearchForMatchBox />
    </div>
  </div>
</template>


<style scoped>
  .search-match-board {
    position: absolute;
    width: 300px;
    height: 400px;
    left: 36px;
    top: 100px;

    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 48px;
    background: linear-gradient(180deg, rgba(25, 92, 192, 0.6552) 0%, rgba(0, 0, 0, 0.91) 100%);
    box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }
</style>

