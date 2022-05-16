import { limit, deleteDoc ,addDoc, collection, getDocs, getFirestore, doc, updateDoc, getDoc, query, where } from 'firebase/firestore';
import { db } from './firebase-config';
import { getAuth } from "firebase/auth";

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
        players.push(player.data().displayName);
    })
    results.push({id:matchSnap.id, ...matchSnap.data(), players: players});
    
    return results;
}

export async function addPlayerToMatch(matchid) {
    const matchRef = doc(db, "Matches", matchid);
    const playersRef = collection(matchRef, "players");

    const auth = getAuth();
    const user = auth.currentUser;

    const docSnap = await getDocs(playersRef);
    if(docSnap.size >= 4) {
        alert("Match is full!");
        return false;
    }

    var isInGameAlready = false;

    docSnap.forEach((player) => {
        if(player.data().id == user.uid) {
            isInGameAlready = true;
            return;
        }
    })

    if(isInGameAlready == true) {
        return true;
    }

    try {
        const docRef = await addDoc(playersRef, {
            id: user.uid,
            displayName: user.displayName
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    return true;
}

export async function removePlayerFromMatch(matchid, playerid) {
    const matchRef = doc(db, "Matches", matchid);
    const playersRef = collection(matchRef, "players");
    
    const auth = getAuth();
    const user = auth.currentUser;
    try {
        const q = query(playersRef, where("id", "==", user.uid));
        const snap = await getDocs(q);
        const playerDocID = [];

        snap.forEach((doc) => {
            playerDocID.push(doc.id);
        })

        await deleteDoc(doc(playersRef, playerDocID[0]));
    } catch (e) {
        console.error("Error deleting player doc: ", e);
    }

    const docSnap = await getDocs(playersRef);
    if(docSnap.size == 0) {
        await deleteDoc(matchRef);
    }
    
}

export async function createMatchAndReturnID(matchData) {
    try {
        const docRef = await addDoc(collection(db, "Matches"), {
          cost: matchData.cost,
          date: matchData.date,
          facility: matchData.facility,
        });
        addPlayerToMatch(docRef.id);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}



