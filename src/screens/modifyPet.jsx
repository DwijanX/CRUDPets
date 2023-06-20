import { React,useState,useEffect } from 'react'
import *  as DB from '../Firebase/dataBaseAdapter' 
import NavBar from '../Components/navbar';
import PetForm from '../Components/petForm';
import {useParams} from 'react-router-dom';
const ModifyPet =()=>{
  const params = useParams();
  const [pet,setPet]=useState({})
  const [loaded,setLoaded]=useState(false)

      useEffect(() => {
        DB.getPet(params.id).then((pet)=>{setPet(pet);setLoaded(true)})
    }, []);
    const updatePet=async(id,values)=>{
      DB.updatePet(id,values)
    }
      return (
        <div>
            <NavBar/>
            {loaded && <PetForm id={pet.id}petName={pet.petName} weight={pet.weight} submitHandler={updatePet}></PetForm>}
        </div>
      )
}

export default ModifyPet