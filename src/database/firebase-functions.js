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
    const snap = await getDoc(matchRef);

    results.push({id:snap.id, ...snap.data()});
    return results;
}

///////////////////// TEST ////////////////////////

export async function test() {
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


const thisMatch = {
    match: 'test'
};

export function addMatch() {
    return addDoc(collection(db,"Matches"),thisMatch);
}

export async function addPlayerToMatch(playerid, matchid) {
    const playersRef = doc(db, "Matches", matchid);

    /*const test = getDoc(collection(getFirestore(), playersRef));

    console.log(test);*/

    const player1 = doc(db, "Matches", matchid);
    //const docSnap = await getDoc(player1);
    const docSnap = await getDocs(collection(getFirestore(),"Matches"));

    if (docSnap.exists()) {
        docSnap.forEach((doclol) => {
            console.log("Document data:", doclol.players);
        });
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    /*
    return updateDoc(playersRef, {
        player1: playerid
    })
    */
}


