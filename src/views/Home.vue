<script setup>
import SearchForMatchButton from '../components/ButtonSearchForMatch.vue'
import CreateMatchButton from '../components/ButtonCreateMatch.vue'
import Logo from '../components/icons/homepage/Logo.vue'
</script>

<template>
    <div class="home">
        <h1 class="overskrift">Smart Padel</h1>
        <Logo class="logo"></Logo>
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

        .logo {
            font: italic;
        position: absolute;
        padding-left: 0px;
        display: inline-block;
        vertical-align: middle;
        bottom: 690px;
    }

    .overskrift {
position: absolute;
left: 20%;
right: 9.87%;
top: 11.7%;
bottom: 69.83%;

font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 75px;

color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

</style>
