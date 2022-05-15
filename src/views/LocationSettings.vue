<script setup>
import location from "../components/LocationPage/Locations.vue"
import back from "../components/icons/back_button.vue"
</script>
<template>
<div class="locationsettings">
  <h1 class="header">Padel centers</h1>
<location></location>
<ul class="back">
    <back></back>
</ul>
</div>

</template>

<style scoped>
.locationsettings {
  position: absolute;
  padding-left: 0px;
  display: inline-block;
  vertical-align: middle;
  bottom: 300px;
  right: 1.5cm;
}

.header{
color: white;
position: relative;
right: -2.5cm;
top: -0.5cm;
}
.back{
  position: relative;
  top: 4.5cm;
  right: -1cm;
}

</style>