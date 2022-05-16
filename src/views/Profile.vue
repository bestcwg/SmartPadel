<script setup>
import curve from '../components/ProfilePage/CurveBackGround.vue'
import profilePic from '../components/ProfilePage/profilePic.vue'
import profileInfo from '../components/ProfilePage/ProfileInfo.vue'
import logo from '../components/DatePage/Logo.vue'
</script>

<template>
<body class="backG">
  <logo></logo>
  <curve></curve>
<profilePic></profilePic>
<profileInfo></profileInfo>
</body>
</template>

<style scoped>

.backG{
        font-weight: normal;
  /* iphone 13 mini height and width*/
  height: 730px;
  width: 375px;
  position: relative;
background: linear-gradient(179.98deg, #1B8E87 0.02%, #FFFFFF 86.44%);

}


</style>