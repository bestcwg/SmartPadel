import {collection, getDocs, getFirestore} from 'firebase/firestore';

export const getAllMatches = async () => {
    const results = [];
    const snap = await getDocs(collection(getFirestore(),"Matches"));
    snap.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()});
    });
    return results;
}