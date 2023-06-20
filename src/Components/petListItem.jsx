import "../Styles/listItem.css"

const PetListItem=({index,petName,weight,id,handleDelete,handleUpdate})=>{


    return (
        <div className="card">
            <h1>{petName}</h1>
            <h2>{weight}</h2>
            <h3>{id}</h3>
            <button onClick={()=>{handleDelete(index,id)}}>Delete Item</button>
            <button onClick={()=>{handleUpdate(id)}}>Update Item</button>
        </div>
    )
}


export default PetListItem