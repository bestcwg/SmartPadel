<script setup>
import * as database from '../../database/firebase-functions'
import router from '../../router';

const matchData = {
    cost: 150,
    facility: "PadelPadel",
    date: "6. September"
}

const createMatch = async () => {
    const matchid = await database.createMatchAndReturnID(matchData);
    router.push("/match/"+matchid);
}
</script>

<template>
    <button @click="createMatch()" class="create-match-button">
        <p>CREATE</p>
        <img src="../../assets/images/ball.png"/>
    </button>
</template>

<style scoped>
    .create-match-button {
        position: relative;
        width: 284px;
        height: 64px;
        border: none;
        color: white;
        background: #75908F;
        mix-blend-mode: normal;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
    }
    .create-match-button p {
        position: absolute;
        left: 0.35%;
        right: 13.38%;
        top: 35%;
        bottom: 0%;

        font: bold 16px sans-serif;
        text-align: center;

        color: #FFFFFF;
        -webkit-text-stroke-width: 1.1px;
        -webkit-text-stroke-color: black;
    }
    .create-match-button img {
        position: absolute;
        left: 76.06%;
        right: 13.38%;
        top: 25%;
        bottom: 25%;

        mix-blend-mode: normal;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
</style>