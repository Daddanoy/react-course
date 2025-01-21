import React, {useState, useEffect, useRef} from 'react'


function StopWatch(){


  const [isRunning, setIsRunning] = useState(false);//if our watch is running
  const [elapsedTime, setElapsedTime] = useState(0)// keep track of how much time has elapsed
  const intervalIdRef = useRef(null) //if we start an interval we need to clear it before using it
  const startTimeRef = useRef(0) //when we start our watch we need to get the current time

  useEffect(()=>{

  },[isRunning]);

  function start(){

  }

  function stop(){

  }

  function reset(){

  }

  function formatTime(){
    return`00:00:00`

  }
return (<>
<div className="stopwatch">
    <div className="display">{formatTime()}</div>
    <div className="controls">
        <button onClick={start} className="start-button">Start</button>
        <button onClick={stop} className="stop-button">Stop</button>
        <button onClick={reset} className="reset-button">Reset</button>
    </div>
</div>
</>)
}

export default StopWatch