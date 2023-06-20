import db from "./DBConnection";
import { doc, setDoc ,getDoc,getDocs,collection,deleteDoc,updateDoc} from "firebase/firestore";

const petsCollection="pets"
const createPet = async (id, petInfo) => {
    await setDoc(doc(db, petsCollection, id), petInfo)
    alert("Created Successfully")
};
const getPet=async(id)=>{
    const docRef = doc(db, petsCollection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}
const getPetsList=async ()=>{
    let pets=[]
    const querySnapshot = await getDocs(collection(db, petsCollection));
    querySnapshot.forEach((doc) => {
        pets.push(doc.data())
    });
    return pets
}
const deletePet=async (id)=>{
    await deleteDoc(doc(db, petsCollection, id));
}
const updatePet=async(id,petInfo)=>{
    const docRef = doc(db, petsCollection,id);

    await updateDoc(docRef, petInfo);
}
export { createPet,getPet,getPetsList,deletePet,updatePet};