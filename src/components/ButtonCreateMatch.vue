<template>
    <router-link to="/creatematch" custom v-slot="{ navigate }">
        <button @click="navigate" class="create-match-button">
            <router-link to="/createMatch"></router-link>
            <p>CREATE MATCH</p>
            <img src="../assets/images/ball.png"/>
        </button>
    </router-link>
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