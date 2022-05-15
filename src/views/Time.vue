<script setup>
import Time from '../components/TimePage/TimeComponent.vue'
import ContinueTime from '../components/TimePage/ContinueTimeButton.vue'
import Availability from '../components/TimePage/AvailabilityButton.vue'
</script>

<template>
<body class="backG">
  <div class="time">
    <h1 class="h1">Time</h1>
    <div class="clock">
    <Time></Time>
    <ul class="conTime">
    <ContinueTime></ContinueTime>
    </ul>
    <Availability></Availability>
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
right: -3.8cm;
bottom: -2cm;
}
.clock{
  position: relative;
bottom: -3.5cm;
}

.conTime{
  position: relative;
  right: -1cm;
  bottom: -1cm;
}

.h3{
  color: white;
  text-underline-position: below;
  position: relative;
  bottom: -1cm;
  right: -3.8cm;
font-size: small;
text-decoration: underline;
}

</style>