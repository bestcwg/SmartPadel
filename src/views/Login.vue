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
        <h2>Register</h2>
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
        <h2>Login</h2>
        <input
            type="email"
            placeholder="Email adress"
            v-model="login_form.email"/>
        <input
            type="password"
            placeholder="Password"
            v-model="login_form.password"/>
        <input
            type="submit"
            value="Login" />
      </form>


      <form class="login"></form>

    </section>
  </main>
</template>



<style>

</style>