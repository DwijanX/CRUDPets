import { React } from 'react'
import { useFormik } from 'formik';
import *  as DB from '../Firebase/dataBaseAdapter' 
import NavBar from '../Components/navbar';
import PetForm from '../Components/petForm';
const Register =()=>{

    const createPet=async(id,values)=>{
        await DB.createPet(id,values)
    }
      return (
        <div>
            <NavBar/>
            <PetForm id="" petName="" weight="" submitHandler={createPet}></PetForm>
        </div>
      )
}

export default Register