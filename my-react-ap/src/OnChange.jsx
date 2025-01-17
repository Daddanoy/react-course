import React, {useState} from 'react'

function OnChange (){

  const [name, setName] = useState("");
  const [qunatity, setQuantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");


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

  function handleShippingChange(event){
    setShipping(event.target.value)
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
      <option value="MasterCard">MasterCard</option>
      <option value="GiftCard">GiftCard</option>
    </select>
    <p>Payment: {payment}</p>

    <label >
      <input type="radio" value="Pick-Up"
            checked={shipping === "Pick-Up"}//if this option is selected,and checked value is equal to shippings value(pickup) the below will set the shipping to the selected
            onChange={handleShippingChange}/>
      
      Pick Up
    </label>
    <label >
    <input type="radio" value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}/>
      Delivery
    </label>
    <p>Shipping: {shipping}</p>
  </div>)

  
}

  

export default OnChange