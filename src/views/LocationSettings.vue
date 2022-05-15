<script setup>
import location from "../components/LocationPage/Locations.vue"
import back from "../components/icons/back_button.vue"

</script>
<template>
<body class="backG">
<div class="locationsettings">
  <h1 class="header">Padel centers</h1>
<location></location>
<ul class="back">
    <back></back>
</ul>
</div>
</body>
</template>

<style scoped>

.backG{
      font-weight: normal;
  /* iphone 13 mini height and width*/
  height: 740px;
  width: 375px;
  position: relative;
       background-image: url('../assets/images/settingBack.png');
}

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
  top: 6.5cm;
  right: -1cm;
}

</style>