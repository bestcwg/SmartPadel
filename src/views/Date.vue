<script setup>
import Date from '../components/DatePage/DateComponent.vue'
import ContinueDate from '../components/DatePage/ContinueDateButton.vue'
import logo from '../components/DatePage/Logo.vue'
</script>

<template>
<body class="backG">

  <div class="date">
    <ul><logo></logo></ul>
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

.con{
position: relative;
right: -1cm;
bottom: -3.6cm;
  }
</style>

