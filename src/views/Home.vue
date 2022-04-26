<script setup>
import SearchForMatchButton from '../components/ButtonSearchForMatch.vue'
import CreateMatchButton from '../components/ButtonCreateMatch.vue'
import LogoPadel from '../components/LogoPadel.vue'
</script>

<template>
    <div class="home">
        
        <div class="padel-logo">
            <LogoPadel />
        </div>
        <div class="home-match-buttons">
            <ul>
                <SearchForMatchButton />
                <CreateMatchButton />
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .home-match-buttons {
        position: absolute;
        padding-left: 42px;
        display: inline-block;
        vertical-align: middle;
        bottom: 150px;
    }

    .home-match-buttons ul {
        position: relative;
        display: grid;
        grid-auto-rows: 100px;
        grid-auto-flow: row;
    }
</style>
