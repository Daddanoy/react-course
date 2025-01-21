import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

//let [number, setNumber] = useState(0)
const inputRef = useRef(null)

useEffect(()=>{
  console.log('COMPONENT RENDERED')
  console.log(inputRef)
})

function handleClick(){
  //setNumber(n => n+1)

inputRef.current.focus()
inputRef.current.style.backgroundColor = 'yellow'
  

}

  return( <div>
  <button onClick={handleClick}>
    Click Me
  </button>
  <input ref={inputRef} />
  
  </div>)
  }
  
  export default MyComponent
