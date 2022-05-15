<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'

const login_form = ref({});
const register_form = ref({});
const store = useStore();

const login = () => {
  store.dispatch('login', login_form.value);
}

const register = () => {
  store.dispatch('register', register_form.value);
}

</script>

<template>
  <main class="Login">
    <section class="forms">

      <form class="register" @submit.prevent="register" >
        <h2>Register new account</h2>
          <input
            type="text"
            placeholder="Username"
            v-model="register_form.username"
          />
        <input
            type="email"
            placeholder="Email"
            v-model="register_form.email"/>
        <input
            type="password"
            placeholder="Password"
            v-model="register_form.password"/>
        <input
            type="submit"
            value="Register" />
      </form>


      <form class="login" @submit.prevent="login" >
        <h2>Already have an account?</h2>
          <input
            type="email"
            placeholder="Email"
            v-model="login_form.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="login_form.password"
          />
          <input
            type="submit"
            value="Login"
            />
      </form>


      <form class="login"></form>

    </section>
  </main>
</template>



<style>

input {
  appearance: none;
  outline: none;
  display: block;
  width: 95%;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0rem;
  border-radius: 10px;
  text-align: center;
}

input:focus:not([type=submit]) {
  opacity: 1;
}

input::placeholder{
color: #432a30;
font-size: 20px;
}

form.register input:not([type=submit]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
  position: relative; top: 20px;
}

form.login input:not([type=submit]) {
  color: #2c3e50;
  border-bottom: 2px solid#2c3e50;
  position: relative; top: 40px;
}


form.register input[type=submit] {
  background-color: rgba(24, 94, 88, 0.908);
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  position: relative; top: 20px;
}

form.login input[type=submit] {
  background-color: rgba(20, 80, 112, 0.908);
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  position: relative; top: 40px;
}

form.register h2{
  padding: 10px;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #fff;
  margin-top: 5;
  text-align: center;
  font-size: 1.3em;
  position: relative; top: 20px;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}


form.login h2{
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;
  color: rgb(255, 255, 255);
  margin-top: 3rem;
  text-align: center;
  position: relative; top: 40px;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;

        width: 320px;
  padding: 10px;
   
}






</style>