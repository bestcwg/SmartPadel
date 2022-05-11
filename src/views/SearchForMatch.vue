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
database.addPlayerToMatch(9, "x3duCPjNMD2IMih6ukZG");
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

