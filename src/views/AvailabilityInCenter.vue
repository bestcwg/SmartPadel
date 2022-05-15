<script setup>
import OverView from '../components/AvailabilityPage/OverviewAvailability.vue'
import Return from '../components/AvailabilityPage/ReturnButton.vue'
</script>

<template>
<body class="backG">

<h1 class="h1">Availability</h1>
<div class="availability">
<OverView></OverView>
<ul class="return">
<Return ></Return>
</ul>
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
right: -3cm;
bottom: -2cm;
}

.return{
  position: relative;
  bottom: -4cm;
  left: 1cm;
}



</style>