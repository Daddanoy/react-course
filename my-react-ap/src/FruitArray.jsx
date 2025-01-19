import React, {useState} from 'react'

//update an array in react attempt

function MyComponent(){

  const [foods, setFoods] = useState(['Fruit1', 'Fruit2'])


  function handleAddFood(){
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value ='';//Resets the inpout after clicking the button

      setFoods(f =>[...f, newFood]) //Use updateer function to update previous state
  }
  
  function handleRemoveFood(index){
    

  }



  return( <>
  <div>
    <h2>List of foods</h2>
    <ul>
      {foods.map((food, index) =>
         <li key = {index}>{food}</li>)}
    </ul>
    <input type="text" id="foodInput" placeholder="Enter food name"/>
    <button onClick={handleAddFood}>Add food</button>
  </div>
  </>)
  }

  //For every index in the food array, print a list item containing each available food, with a unique index. 
  
  export default MyComponent