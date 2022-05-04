<script setup>
import Date from '../components/DateComponent.vue'
import ContinueDate from '../components/ContinueDateButton.vue'
</script>

<template>
  <div class="date">
    <h1 class="h1">Date</h1>
    <Date></Date>
    <div>
    <ul class="con">
    <ContinueDate></ContinueDate>
    </ul>
    </div>
  </div>
</template>


<style scoped>
.h1{
  color: white;
  position: relative;
right: -4cm;
bottom: -2cm;
}

.con{
position: relative;
right: -1cm;
bottom: -3cm;
  }
</style>

