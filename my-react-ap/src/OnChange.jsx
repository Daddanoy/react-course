import React, {useState} from 'react'

function OnChange (){

  const [name, setName] = useState("");
  const [qunatity, setQuantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("")

  function handleQuantityChange(event){
    setQuantity(event.target.value)
    
  }

  function handleChange(event){
    setName(event.target.value)
  }

  function handleCommentChange(event){
    setComment(event.target.value)
  }

  function handlePaymentChange(event){
    setPayment(event.target.value)
  }

  return(<div>
    <input value ={name} onChange={handleChange} />
    <p>Name: {name}</p>

    <input value = {qunatity} onChange={handleQuantityChange} type='number' />
    <p> Qunatity: {qunatity}</p>

    <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery Instructions'></textarea>
    <p>Comment: {comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
      <option value =""> Select an option</option>
      <option value="Visa">Visa</option>
      <option value="MasterdCard">MasterCard</option>
      <option value="GiftCard">GiftCard</option>
    </select>
    <p>Payment: {payment}</p>
  </div>)

  
}

  

export default OnChange