import React, {useState, useEffect, useRef} from 'react'


function StopWatch(){


  const [isRunning, setIsRunning] = useState(false);//if our watch is running
  const [elapsedTime, setElapsedTime] = useState(0)// keep track of how much time has elapsed
  const intervalIdRef = useRef(null) //if we start an interval we need to clear it before using it
  const startTimeRef = useRef(0) //when we start our watch we need to get the current time

  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current = setInterval(()=>{
     setElapsedTime(Date.now()-startTimeRef.current)
      },10)

      return ()=>{
        clearInterval(intervalIdRef.current)
      }

    }

  },[isRunning]);

  function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current)//converts date and time into ms since the 1970's
  }

  function stop(){
    setIsRunning(false)
  }

  function reset(){
    setElapsedTime(0)
    setIsRunning(false)
  }

  function formatTime(){

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / (1000) % 60)
    let milliseconds = Math.floor(elapsedTime % 1000/10)


    return`${minutes}:${seconds}:${milliseconds} `

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