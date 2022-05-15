<script setup>
import back from "../components/icons/back_button.vue"
import level from "../components/SettingsPage/LevelSettings/Levels.vue"
</script>
<template>
<div class="levelsettings">
  <level></level>
  <ul class="back">
    <back></back>
  </ul>
</div>

</template>

<style scoped>

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