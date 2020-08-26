import { projectFirestore } from "../firebase/config";

const useFirestoreDB = async (objectsToAdd) => {
    const collectionRef = projectFirestore.collection("Menu");

    
    const batch = projectFirestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    });

    return await batch.commit();
};

export default useFirestoreDB;
