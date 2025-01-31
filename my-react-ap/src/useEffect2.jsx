import React, {useState, useEffect} from 'react'

//1.useEffect(()=> {})        //Runs after every re-render
// 2.useEffect(()=> {},[])    //Runs only on mount
// 3.useEffect(()=> {}, [value]) // Runs on mount + when value changes

function MyComponent(){
  
 const [width , setWidth] = useState(window.innerWidth)
 const [height, setHeight] = useState(window.innerHeight)

 useEffect(()=>{
  window.addEventListener('resize', handleResize )
  console.log('EVENT LISTENER ADDED')

  return()=>{
    window.removeEventListener("resize", handleResize)
    console.log('EVENT LISTENER REMOVED')

  }

 },[])


 useEffect(()=>{
  document.title = `size : ${width} x ${height}`
 },[width, height])

 function handleResize(){
  setWidth(window.innerWidth)
  setHeight(window.innerHeight)
 }

  return( <>

  <p>Window Width: {width}px</p>
  <p>Window Height: {height}px</p>

  </>)

  }
  
  export default MyComponent
