import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore';
import { db } from './firebase-config';

export const getAllMatches = async () => {
    const results = [];
    const snap = await getDocs(collection(getFirestore(),"Matches"));
    snap.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()});
    });
    return results;
}

const test = {
    name: "gey",
    price: 15
}

export function addMatch() {
    return addDoc(collection(db,"Matches"),test);
}