import React, {useState} from 'react'

function OnChange (){

  const [name, setName] = useState("");
  const [qunatity, setQuantity] = useState();

  function handleQuantityChange(event){
    setQuantity(event.target.value)
    
  }

  function handleChange(event){
    setName(event.target.value)
  }


  return(<div>
    <input value ={name} onChange={handleChange} />
    <p>Name: {name}</p>

    <input value = {qunatity} onChange={handleQuantityChange} type='number' />
    <p> Qunatity: {qunatity}</p>
  </div>)
}

  

export default OnChange