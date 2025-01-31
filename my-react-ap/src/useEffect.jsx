import React, {useState, useEffect} from 'react'

//1.useEffect(()=> {})        //Runs after every re-render
// 2.useEffect(()=> {},[])    //Runs only on mount
// 3.useEffect(()=> {}, [value]) // Runs on mount + when value changes

function MyComponent(){

const [count, setCount] = useState(0);
const [color, setColor] = useState('green')

useEffect(()=>{
  document.title = `Count : ${count} ${color}`
},[count,color]);// do this code only when counts value updates. basically side code

function addCount(){
  setCount(c=> c+1)
}

function subtractCount(){
  setCount(c=> c - 1)
}

function changeColor(){
  setColor(c=> c === 'green'? 'red' : 'green')
}

  return( <>
  <p style={{color: color}}>Count : {count}</p>
  <button onClick={addCount}>Add</button>
  <button onClick = {subtractCount}>Subtract</button><br/>
  <button onClick={changeColor}>Change color</button>

  </>)

  }
  
  export default MyComponent
