<script setup>
import { useRouter, useRoute } from 'vue-router'
import  * as database from '../database/firebase-functions';
import { useQuery, useQueryClient, useQueries } from 'vue-query';
import router from '../router';

const route = useRoute();
const queryClient = useQueryClient();

const matchid = route.params.id;

const { data } = useQuery(
    ["Match",matchid],
    () => database.getMatchByID(matchid)
);

const leaveMatch = async (matchid) => {
    console.log("test");
    await database.removePlayerFromMatch(matchid,0);
    router.push({
            path: "/searchformatch",
        });
}

</script>

<template>
<body class="backG">
    <section v-for="item in data" :key="item.id">
    <h1 class="receipt">RECEIPT</h1>
        <div class="matchinfo">
            <ul>
                <li>Location: {{ item.facility }}</li>
                <li>Time: {{ item.date }}</li>
                <li>Price: {{ item.cost }} DKK</li>
            </ul>
        </div>
    <img src="../assets/images/zoomedfield.png">
    <div class="players">
        <ul v-for="n in 4" :key="n.id">
            <span :class="`player${n}`">
                <div v-if="!item.players[n-1]"></div>
                <div v-else>{{ item.players[n-1] }}</div>
            </span>
        </ul>
    </div>
    <button class="paybutton"><p>Pay here</p></button>
    <button @click="leaveMatch(item.id)" class="button-leave">Leave match</button>
    </section>
</body>
</template>

<style scoped>
.backG{
    font-weight: normal;
    /* iphone 13 mini height and width*/
    height: 730px;
    width: 375px;
    position: relative;
    background: linear-gradient(180.02deg, #1B8E87 0.02%, #FFFFFF 92.97%);

}
.receipt {
    position: absolute;
    left: 8.53%;
    right: 8.27%;
    top: 7.51%;
    bottom: 86.58%;

    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.02em;

    color: #FFFFFF;

    mix-blend-mode: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.matchinfo {
    position: absolute;
width: 333px;
height: 153px;
left: 32px;
top: 123px;


    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
}

.paybutton {
position: absolute;
width: 234px;
height: 52px;
left: 128px;
top: 684px;

background: #1B8E87;
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
border: none;
outline:none;
}

.paybutton p {


font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 17px;
text-align: center;

color: #FFFFFF;

}
.button-leave {
position: absolute;
width: 100px;
height: 40px;
left: 20px;
top: 690px;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 17px;
text-align: center;

color: #FFFFFF;

background: #e41c1c;
border-radius: 20px;

border: none;
outline:none;
}

img {
    position: absolute;
width: 370px;
height: 370px;
left: 2px;
top: 276px;
}

.players {
    font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 6px;
text-align: center;

color: #FFFFFF;
}
.player1 {
    position: absolute;
left: 15.68%;
right: 68.98%;
top: 50.46%;
bottom: 66.3%;

}

.player2 {
    position: absolute;
left: 69.46%;
right: 15.2%;
top: 50.54%;
bottom: 65.22%;

}

.player3 {
    position: absolute;
left: 16%;
right: 68.66%;
top: 75%;
bottom: 30.76%;

}

.player4 {
    position: absolute;
left: 65%;
right: 9.71%;
top: 81.5%;
bottom: 14.42%;

}

</style>