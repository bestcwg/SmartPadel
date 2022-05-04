<script setup>
import OverView from '../components/AvailabilityPage/OverviewAvailability.vue'
import Return from '../components/AvailabilityPage/ReturnButton.vue'
</script>

<template>
<h1 class="h1">Availability</h1>
<div class="availability">
<OverView></OverView>
<ul class="return">
<Return ></Return>
</ul>
</div>

</template>

<style scoped>
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