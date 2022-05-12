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
            placeholder="Email adress"
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
            placeholder="Email adress"
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
}

input:focus:not([type=submit]) {
  opacity: 1;
}

input::placeholder{
  color: inherit;
}

form.register input:not([type=submit]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

form.login input:not([type=submit]) {
  color: #2c3e50;
  border-bottom: 2px solid#2c3e50;
}


form.register input[type=submit] {
  background-color: rgba(24, 94, 88, 0.908);
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  text-transform: uppercase;
}

form.login input[type=submit] {
  background-color: rgba(20, 80, 112, 0.908);
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
text-transform: uppercase;
}

form.register h2{
  font-family: sans-serif;
  text-transform: uppercase;
  color: #fff;
  margin-top: 5;
  text-align: center;
  font-size: 1.3em;
}

form.login h2{

  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;
  color: #fff;
  margin-top: 3rem;
  text-align: center;
}





</style>