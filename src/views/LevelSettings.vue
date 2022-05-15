<script setup>
import back from "../components/icons/back_button.vue"
import level from "../components/SettingsPage/LevelSettings/Levels.vue"
</script>
<template>
<body class="backG">

<div class="levelsettings">
  <level></level>
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
.levelsettings{
  position: relative;
  top: 1.5cm;
  right: -0.5cm;
}

.back{
  position: relative;
  top: 0.5cm;

}

</style>