<template>
    <button class="search-for-match-button">
        <router-link to="/match">
            <p>SEARCH FOR MATCH</p>
            <img src="../assets/images/ball.png"/>
        </router-link>
    </button>
</template>

<style scoped>
    .search-for-match-button {
        position: relative;
        width: 284px;
        height: 64px;
        border: none;
        color: white;
        background: #75908F;    
        
        border-radius: 30px;
    }
    .search-for-match-button p {
        position: absolute;
        left: 0.35%;
        right: 13.38%;
        top: 35%;
        bottom: 0%;

        font: bold 16px sans-serif;
        text-align: center;

        color: #FFFFFF;
        -webkit-text-stroke-width: 1.2px;
        -webkit-text-stroke-color: black;
    }

    .search-for-match-button img {
        position: absolute;
        left: 76.06%;
        right: 13.38%;
        top: 25%;
        bottom: 25%;

        mix-blend-mode: normal;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
</style>