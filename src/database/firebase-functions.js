import { addDoc, collection, getDocs, getFirestore, doc, updateDoc, getDoc, query, where } from 'firebase/firestore';
import { db } from './firebase-config';

export const getAllMatches = async () => {
    const results = [];
    const snap = await getDocs(collection(db,"Matches"));
    snap.forEach((doclol) => {
        results.push({id: doclol.id});
    });
    
    return results;
}

export async function getMatchByID(matchid) {

    const results = [];
    const matchRef = doc(db, "Matches", matchid);
    const playersRef = collection(matchRef, "players");
    const playersSnap = await getDocs(playersRef);
    const snap = await getDoc(matchRef);
    const players = [];
    playersSnap.forEach((player) => {
        players.push(player.data().id);
    })
    results.push({id:snap.id, ...snap.data(), players: players});
    //results.push({players: players});
    console.log("Matchid: ", matchid, "data: ", results);
    return results;
}

///////////////////// TEST ////////////////////////

export async function createMatchTest() {
    try {
        const docRef = await addDoc(collection(db, "Matches"), {
          cost: 140,
          date: "januar 1.",
          facility: "Padel center",
          players: {
              player1: {
                  id: 0
              },
              player2: {
                  id: 0
              },
              player3: {
                  id: 0
              },
              player4: {
                  id: 0
              }
          }
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function addPlayerToMatch(playerid, matchid) {
    const matchRef = doc(db, "Matches", matchid);
    const playersRef = collection(matchRef, "players");

    //const docSnap = await getDoc(player1);
    const docSnap = await getDocs(playersRef);
    console.log("Add player to match:");
    //console.log(docSnap.data().players.player1);
    if(docSnap.size >= 4) {
        alert('MATCH IS FULL!');
        return;
    }

    try {
        const docRef = await addDoc(playersRef, {
          id: playerid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


