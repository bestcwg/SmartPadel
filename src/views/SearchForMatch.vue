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
<body class="backG">
  <h1 class="header">Matches</h1>
  <section v-for="item in data" :key="item.id">
    <div id="search-match">
      <MatchBox :matchID="item.id"/>
    </div>
  </section>
</body>
</template>

<style scoped>

.header{
  color:white;
  position: relative;
  left: 3.5cm;
  top: 1;
}

#search-match {
  position: relative;
  left: 1cm;
  top: 2cm;
  display: inline-grid;
  margin-block-end: 1cm;
  grid-template-rows: 40px 20em 40px;

}
.backG{
        font-weight: normal;
  /* iphone 13 mini height and width*/
  height: 730px;
  width: 375px;
  position: relative;
       background: linear-gradient(180.02deg, #1B8E87 0.02%, #FFFFFF 92.97%);
  overflow: scroll;
}


</style>

