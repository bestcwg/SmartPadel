<template>
        <button class="log-out-button" @click="$store.dispatch('logout')">
            <router-link to="/login"></router-link>
            <p class="font">SIGN OUT</p>
        </button>

</template>

<style scoped>
.log-out-button{

position: absolute;
width: 150px;
height: 49px;
left: 107px;
top: 604px;
cursor: pointer;
}

.log-out-button{
position: absolute;
width: 150px;
height: 49px;
left: 107px;
top: 604px;

background: #1B8E87;
border-radius: 20px;
}

.font{
    color: white;
}

</style>