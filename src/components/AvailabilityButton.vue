<template>
 <router-link to="/availability" custom v-slot="{ navigate }">
 <button @click="navigate" class="create-match-button">
    <h3 class="h3">Availability</h3>
        </button>
    </router-link>
</template>

<style scoped>
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