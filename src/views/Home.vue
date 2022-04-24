
<script setup>
import SearchForMatchButton from '../components/icons/SearchForMatchButton.vue'
import SearchButton from '../components/icons/SearchButton.vue'



</script>



<template>
    <div class="home">
        <h1>HOME</h1>
        <router-link to="/match"> <SearchForMatchButton></SearchForMatchButton></router-link>
        <router-link to="/createMatch"><SearchButton></SearchButton></router-link>
    </div>

</template>

<style>

</style>
