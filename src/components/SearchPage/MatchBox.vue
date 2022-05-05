<script setup>
import WaitingForUserIcon from '../icons/finding_match/IconUser.vue'
import { useQuery, useQueryClient, useQueries } from 'vue-query';
import  * as database from '../../database/firebase-functions';

import { getIdToken } from 'firebase/auth';

const queryClient = useQueryClient();

const props = defineProps({
    matchID: String
})

const { data } = useQuery(
    ["GetMatchWithID",props.matchID],
    () => database.getMatchByID(props.matchID)
);
</script>



<template>
<section v-for="item in data" :key="item.id">
    <div class="search-match-board">
        <div id="match-time-playing">
            <p>{{ item.date }}</p>
        </div>
        <div id="match-players"> 
            <img src="../../assets/images/field.png">
            <ul>
                <span id="player1">
                    <div v-if="item.players.player1.id == 0"><WaitingForUserIcon /></div>
                    <div v-else>{{ item.players.player1.id }}</div>
                </span>
                <span id="player2">
                    <div v-if="item.players.player2.id == 0"><WaitingForUserIcon /></div>
                    <div v-else>{{ item.players.player2.id }}</div>
                </span>
                <span id="player3">
                    <div v-if="item.players.player3.id == 0"><WaitingForUserIcon /></div>
                    <div v-else>{{ item.players.player3.id }}</div>
                </span>
                <span id="player4">
                    <div v-if="item.players.player4.id == 0"><WaitingForUserIcon /></div>
                    <div v-else>{{ item.players.player4.id }}</div>
                </span>
            </ul>
        </div>
        <div id="match-information">
            <ul>
                <li id="padel-facility">{{ item.facility }}</li>
                <li id="hours-playing">test</li>
                <li id="amount-paying">{{ item.cost }} DKK</li>
            </ul>
        </div>
        <div id="match-join">
            <router-link :to="`/match/${item.id}`" custom v-slot="{ navigate }">
                <button @click="navigate" id="button-join-match">
                    <p>Join Match</p>
                </button>
            </router-link>
        </div>
    </div>
</section>
</template>

<style scoped>
.search-match-board {
    position: absolute;
    width: 300px;
    height: 400px;

    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 48px;
    background: linear-gradient(180deg, rgba(25, 92, 192, 0.6552) 0%, rgba(0, 0, 0, 0.91) 100%);
    box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }

#match-players {
    position: absolute;
    left: 16.67%;
    right: 16.67%;
    top: 12%;
    bottom: 38%;
}

#match-time-playing {
    position: absolute;
    left: 0%;
    right: 0.33%;
    top: 2.75%;
    bottom: 89.17%;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    text-align: center;

    color: #FDFDFD;
}

#match-information ul {
    list-style-type: none;
}

#match-information ul li {
    position: absolute;
    background: rgba(241, 242, 245, 0.46);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    height: 54px;
    width: 83px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #F1F2F5;
}

#padel-facility {
    position: absolute;
    left: 2%;
    right: 70.27%;
    top: 67.44%;
    bottom: 18.97%;
}

#hours-playing{
    position: absolute;
    left: 36.08%;
    right: 36.19%;
    top: 67.69%;
    bottom: 18.72%;
}

#amount-paying{
    position: absolute;
    left: 70.16%;
    right: 2.12%;
    top: 67.44%;
    bottom: 18.97%;
}

#button-join-match{
    position: absolute;
    left: 24.28%;
    right: 24.16%;
    top: 84.72%;
    bottom: 4.62%;

    background: #08D104;
    border-radius: 10px;
}

#button-join-match p{
    font-family: 'Lato';
    font-style: bold;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: rgba(255, 255, 255, 0.91);
    -webkit-text-stroke-width: 1.1px;
    -webkit-text-stroke-color: black;
}

#player1 {
    position: absolute;
    left: 17.5%;
    right: 62.5%;
    top: 12%;
    bottom: 68%;
}

#player2{
    position: absolute;
    left: 65%;
    right: 15%;
    top: 12%;
    bottom: 68%;

}

#player3{
    position: absolute;
    left: 17.5%;
    right: 62.5%;
    top: 64%;
    bottom: 16%;
}

#player4{
    position: absolute;
    left: 65%;
    right: 15%;
    top: 64%;
    bottom: 16%;
}
</style>