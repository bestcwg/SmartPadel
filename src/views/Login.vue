<script setup>
import {ref} from 'vue'
import { Vue } from 'vue-query/node_modules/vue-demi';
import {useStore} from 'vuex'
import logo from '../components/DatePage/Logo.vue'






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
<body class="backG">


  <logo></logo>
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
        <h2 v-on:click="data()">Already have an account?</h2>
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

</body>
</template>



<style>

.backG{
        font-weight: normal;
  /* iphone 13 mini height and width*/
  height: 730px;
  width: 375px;
  position: relative;
background: linear-gradient(179.89deg, #1B8E87 14.47%, rgba(27, 142, 135, 0) 112.53%);
}




input {
  appearance: none;
  outline: none;
  display: block;
  width: 75%;
  margin: auto;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0rem;
  background:transparent;
  border: 0px transparent;
  color: #fff;
 }



input:focus:not([type=submit]) {
  opacity: 1;
}

input::placeholder{
font-size: 15px;
text-align: left;

}

form.register input:not([type=submit]) {
  color: #ffffff;
  border-bottom: 2px solid #ffffff;
  position: relative; top: 20px;
  font-style: oblique;
}



form.login input:not([type=submit]) {
  color: #ffffff;
  border-bottom: 2px solid#ffffff;
  position: relative;
  top: 30px;
    font-style: oblique;
    position: relative;

}


form.register input[type=submit] {
background: #75908F;
  color: #fff;
  font-weight: 700;
  border-radius: 60rem;
  cursor: pointer;
  text-transform: uppercase;
  position: relative; top: 20px;
  width: 4cm;
}

form.login input[type=submit] {
  background: #1B8E87;
  color: #fff;
  font-weight: 700;
  border-radius: 60rem;
  cursor: pointer;
  text-transform: uppercase;
  position: relative; top: 40px;
   width: 3cm;
}








form.register h2{
  padding: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  margin-top: 5;
  text-align: center;
  font-size: 1.3em;
  position: relative; top: 20px;


}


form.login h2{
font-family: 'Roboto';
font-style:normal;
font-weight: 500;
font-size: 30px;
line-height: 35px;
  font-size: 1.3em;
  color: #ffffff;
  margin-top: -1rem;
  text-align: center;
  position: relative; top: 30px;
  left: 0.2cm;
        width: 320px;
  padding: 10px;

}






</style>