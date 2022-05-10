<template>
        <button @click="$store.dispatch('logout')">
            <router-link to="/login"></router-link>
            <p>LOGOUT</p>
            <img src="../../assets/images/ball.png"/>
        </button>
    
</template>



<style scoped>
.log-out-button {
position: absolute;
width: 107px;
height: 39px;
left: 126px;
top: 648px;
}
</style>