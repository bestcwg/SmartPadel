<template>
 <router-link to="/availability" custom v-slot="{ navigate }">
    <h3 @click="navigate" class="h3">Availability</h3>
    </router-link>
</template>

<style scoped>
.h3{
  color: black;
  text-underline-position: below;
  position: relative;
  bottom: -1cm;
  right: -3.8cm;
font-size: small;
text-decoration: underline;
}
</style>