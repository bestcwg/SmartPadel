import { limit, deleteDoc ,addDoc, collection, getDocs, getFirestore, doc, updateDoc, getDoc, query, where } from 'firebase/firestore';
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
    const matchSnap = await getDoc(matchRef);

    const players = [];
    const playersRef = collection(matchRef, "players");
    const playersSnap = await getDocs(playersRef);

    playersSnap.forEach((player) => {
        players.push(player.data().id);
    })
    results.push({id:matchSnap.id, ...matchSnap.data(), players: players});
    //results.push({players: players});
    return results;
}

export async function addPlayerToMatch(playerid, matchid) {
    const matchRef = doc(db, "Matches", matchid);
    const playersRef = collection(matchRef, "players");

    const docSnap = await getDocs(playersRef);
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

export async function removePlayerFromMatch(playerid, matchid) {
    const matchRef = doc(db, "Matches", matchid);
    const playersRef = collection(matchRef, "players");

    try {
        const q = query(playersRef, where("id", "==", playerid));
        const snap = await getDocs(q);
        const playerDocID = [];

        snap.forEach((doc) => {
            playerDocID.push(doc.id);
        })

        await deleteDoc(doc(playersRef, playerDocID[0]));
    } catch (e) {
        console.error("Error deleting player doc: ", e);
    }
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

////////////////////////////////////////////////////////////


