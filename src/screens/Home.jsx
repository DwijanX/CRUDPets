import { useState,React,useEffect } from 'react'
import '../Styles/App.css'
import NavBar from '../Components/navbar';
import PetListItem from '../Components/petListItem';
import {getPetsList,deletePet}from '../Firebase/dataBaseAdapter' 
import { useNavigate } from "react-router-dom";
function App() {
    const navigate = useNavigate();
    const [petList,setPetList]=useState([])
    useEffect(() => {
        getPetsList().then((PetList)=>{setPetList(PetList)})
    }, []);

    const handleDeleteItem=async (index,id)=>{
        await deletePet(id).then(alert("deleted succesfully"))
        let clonedList = [...petList];
        clonedList.splice(index, 1)
        setPetList(clonedList);
    }
    const handleUpdateItem=async (id)=>{
        navigate("/update/"+id);
    }
    return(
        <div><NavBar></NavBar>
        <div>
            {petList.map((item,index)=>{
                return <PetListItem key={index} index={index} petName={item["petName"]} weight={item["weight"]} id={item["id"]} handleDelete={handleDeleteItem} handleUpdate={handleUpdateItem}/>
            })}
        </div>
        </div>
    )
}

export default App
