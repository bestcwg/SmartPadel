<script setup>
import SearchForMatchButton from '../components/ButtonSearchForMatch.vue'
import CreateMatchButton from '../components/ButtonCreateMatch.vue'
</script>

<template>
    <div class="home">
        <h1>HOME</h1>
        <div class="home-match-buttoms">
            <ul>
                <SearchForMatchButton />
                <CreateMatchButton />
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
        position: relative;
        display: grid;
        grid-auto-rows: 100px;
        grid-auto-flow: row;
    }
</style>
