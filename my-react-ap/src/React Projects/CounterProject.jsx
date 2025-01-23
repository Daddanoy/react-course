import React, {useState} from 'react'


function CounterApp(){

let [count, setCount] = useState(0);

function addCount(){
  setCount(c => c+1)

  console.log(count)
}

function decreaseCounter(){
  if(count >0){
    setCount(c=> c-1)
    console.log(count)

  }

}

function resetCounter(){
  setCount(0)
}

return(<div>

<h1>Counter App</h1>
<div>
  <p>{count}</p>
  <button onClick = {addCount}>Increase</button>
  <button onClick= {decreaseCounter}>Decrease</button>
  <button onClick={resetCounter}>Reset</button>
</div>

</div>

)

}
export default CounterApp