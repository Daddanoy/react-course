import React, {useState} from 'react'


function CounterApp(){
  let [counter, setCounter] = useState(0);

  const increaseCounter = ()=>{
    setCounter(c => c +1) //Updater function, best to use for good practice. Function passed as an argument to set state. Allows for updates based on the previous state, not the current state.
    setCounter(c => c +1)
    setCounter(c => c +1)
  }

  const decreaseCounter = ()=>{
    if(counter >= 1){
      setCounter(c =>c -1)
      setCounter(c =>c -1)
      setCounter(c =>c -1)
    }
  }
    
    const resetCounter = ()=>{
      setCounter(0)
    }
return (
  <div className ="main-grid">
    <div className ="js-counter">{counter}</div>
    <div>
      <button className ="count-button"  onClick={decreaseCounter}>Decrement</button>
      <button className ="count-button" onClick = {resetCounter}>Reset</button>
      <button className ="count-button" onClick = {increaseCounter}>Increment</button>
    </div>
  </div>
)
}

export default CounterApp