<script setup>
import MatchBox from '../components/SearchPage/MatchBox.vue';
import { useQuery, useQueryClient, useQueries } from 'vue-query';
import  * as database from '../database/firebase-functions';

import { getAuth, onAuthStateChanged } from "firebase/auth";

const queryClient = useQueryClient();

const { data } = useQuery(
    "MatchesIDs",
    database.getAllMatches
);

//database.removePlayerFromMatch(9, "5wDOk3YZkzodWCIpGBeh");
database.addPlayerToMatch(9, "5wDOk3YZkzodWCIpGBeh");

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const email = user.email;
    const userName = user.displayName;
    console.log("logged in user: ",uid, "User Email: ", email, "This is the Name: ", userName);

    // ...
  } else {
    // User is signed out
    // ...
    console.log("Logged out");
  }
});


</script>

<template>
  <section v-for="item in data" :key="item.id">
    <div id="search-match">
      <MatchBox :matchID="item.id"/>
    </div>
  </section>
</template>

<style scoped>
#search-match {
  display: inline-grid;
  grid-template-rows: 40px 20em 40px;

}
</style>

