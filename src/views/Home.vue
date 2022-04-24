<template>
    <div class="home">
        <h1>HOME</h1>
        <router-link to="/match"> <button class="button">FIND MATCH</button></router-link>
        <router-link to="/createMatch"> <button class="button">Create MATCH</button></router-link>
    </div>
</template>

<style>
    .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    }

    .SearchForMatchButton {

    position: absolute;
    width: 284px;
    height: 64px;
    left: 45px;
    top: 540px;

    background: #1B8E87;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    }
</style>
