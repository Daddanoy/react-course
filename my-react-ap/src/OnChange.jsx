import React, {useState} from 'react'

function OnChange (){

  const [name, setName] = useState("");

  function handleChange(event){
    setName(event.target.value)
  }


  return(<div>
    <input value ={name} onChange={handleChange} />
    <p>Name: {name}</p>
  </div>)
}

  

export default OnChange