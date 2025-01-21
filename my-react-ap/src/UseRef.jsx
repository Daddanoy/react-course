import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

//let [number, setNumber] = useState(0)
const inputRef = useRef(null)
const inputRef2 = useRef(null)
const inputRef3 = useRef(null)

useEffect(()=>{
  console.log('COMPONENT RENDERED')
  console.log(inputRef)
})

function handleClick(){
  //setNumber(n => n+1)

inputRef.current.focus()
inputRef.current.style.backgroundColor = 'yellow'
inputRef2.current.style.backgroundColor = ''
inputRef3.current.style.backgroundColor = ''
  

}

function handleClick2(){
  //setNumber(n => n+1)

inputRef2.current.focus()
inputRef.current.style.backgroundColor = ''
inputRef2.current.style.backgroundColor = 'yellow'
inputRef3.current.style.backgroundColor = ''
  

}

function handleClick3(){
  //setNumber(n => n+1)

inputRef3.current.focus()
inputRef.current.style.backgroundColor = ''
inputRef2.current.style.backgroundColor = ''
inputRef3.current.style.backgroundColor = 'yellow'
  

}

  return( <div>
  <button onClick={handleClick}>
    Click Me
  </button>
  <input ref={inputRef} />

  <button onClick={handleClick2}>
    Click Me 2
  </button>
  <input ref={inputRef2} />

  <button onClick={handleClick3}>
    Click Me 3
  </button>
  <input ref={inputRef3} />
  
  </div>)
  }
  
  export default MyComponent
