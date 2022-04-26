<template>
    <div id="match-time-playing">
        <p>14:00-16:00</p>
    </div>
    <div id="match-players">
        <img src="../assets/images/field.png">
    </div>
    <div id="match-information">
        <ul>
            <li id="padel-facility">1</li>
            <li id="hours-playing">2</li>
            <li id="amount-paying">3</li>
        </ul>
    </div>
    <div id="match-join">
        <router-link to="/match" custom v-slot="{ navigate }">
            <button @click="navigate" id="button-join-match">
                <p>Join Match</p>
            </button>
        </router-link>
    </div>
</template>

<style scoped>
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
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: rgba(255, 255, 255, 0.91);
    -webkit-text-stroke-width: 1.1px;
    -webkit-text-stroke-color: black;
}

</style>