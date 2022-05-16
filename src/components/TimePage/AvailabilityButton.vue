<template>
 <router-link to="/availability" custom v-slot="{ navigate }">
    <h3 @click="navigate" class="h3">Availability</h3>
    </router-link>
</template>

<style scoped>
.h3{
     padding: 10px;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #fff;

  text-align: center;
  font-size: 1em;
  position: relative; top: 120px;
  left: -0.4cm;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
  cursor: pointer;
}
</style>