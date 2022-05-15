<script setup>
import Date from '../components/DatePage/DateComponent.vue'
import ContinueDate from '../components/DatePage/ContinueDateButton.vue'
</script>

<template>
<body class="backG">

  <div class="date">
    <h1 class="h1">Date</h1>
    <Date></Date>
    <div>
    <ul class="con">
    <ContinueDate></ContinueDate>
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
  color: white;
  position: relative;
right: -4cm;
bottom: -2cm;
}

.con{
position: relative;
right: -1cm;
bottom: -3.6cm;
  }
</style>

