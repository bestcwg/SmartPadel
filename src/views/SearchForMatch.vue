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



const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  console.log("brugernavn:", displayName, "Email:", email)
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}



//database.removePlayerFromMatch(9, "5wDOk3YZkzodWCIpGBeh");
//database.addPlayerToMatch(9, "x3duCPjNMD2IMih6ukZG");
//database.createMatchTest();

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

