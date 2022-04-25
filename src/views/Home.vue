<script setup>
import SearchForMatchButton from '../components/icons/SearchForMatchButton.vue'
import CreateMatchButton from '../components/icons/CreateMatchButton.vue'
</script>

<template>
    <div class="home">
        <h1>HOME</h1>
        <div class="home-match-buttoms">
            <ul>
                <router-link to="/match"> <SearchForMatchButton /></router-link>
                <router-link to="/createMatch"><CreateMatchButton /></router-link>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .home-match-buttoms {
        position: absolute;
        padding-left: 42px;
        display: inline-block;
        vertical-align: middle;
        bottom: 150px;
    }

    .home-match-buttoms ul {
        display: grid;
        grid-auto-rows: 100px;
        grid-auto-flow: row;
    }
</style>
