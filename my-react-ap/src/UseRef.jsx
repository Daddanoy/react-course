import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

let [number, setNumber] = useState(0)

useEffect(()=>{
  console.log('COMPONENT RENDERED')
})

function handleClick(){
  setNumber(n => n+1)

}

  return( <>
  <button onClick={handleClick}>
    Click Me
  </button>
  <p>{number}</p>
  </>)
  }
  
  export default MyComponent
