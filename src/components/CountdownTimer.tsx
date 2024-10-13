import React, { useState, useEffect} from "react"

const CountdownTimer: React.FC = () => {

  const [time, setTime] = useState(0);
  const [ isRunning, setIsRunningTime] = useState(false);
  const [remainingTime, setRemainingTime] = useState (0)

useEffect(() => {
  let timer: NodeJS.Timeout;
  if (isRunning && remainingTime > 0){
    timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1)
    }, 1000)
  }
  else if (remainingTime === 0) {
    setIsRunningTime(false)
  }
  return () => clearInterval(timer);
}, [isRunning, remainingTime])

const Start = () => {
  if (time > 0) {
    setRemainingTime(time)
    setIsRunningTime(true)
  }
}

const pause = () => {
  setIsRunningTime(false)
}
const reset = () => {
  setIsRunningTime(false)
  setRemainingTime(0)
  setTime(0)
}
return(
   <div className=" flex  flex-col min-h-screen items-center 
   justify-center  bg-gradient-to-br 
   from-black to-grey">


<h1 className="text-4x1 font-extrabold uppercase mb-6 text-white">Countdown Timer</h1>

<input 
type="number" 
className="border-2 border-blue-600 bg-transparent p-3 mb-6 text-white-600 text-xl rounded"
placeholder="Enter Time in Seconds"
value={time > 0 ? time : ""}
onChange={(e) => setTime(Number(e.target.value))}
/>

<div className="text-3xl font-semibold uppercase mb-6 text-white">
  {remainingTime} seconds remaining
</div>

<div>
  <button
    onClick={Start}
    className="text-white px-8 py-4 rounded-lg font-normal mr-4
    bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
      Start
  </button>

<button
    onClick={pause}
    className="text-white px-8 py-4 rounded-lg font-normal mr-4
    bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
   Pause
</button>

<button
onClick={reset}    
className="text-white px-8 py-4 rounded-lg font-normal
    bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
Reset
</button>

</div>

<footer className="mt-10 text-sm">
  Created by @Laiba Jaweed
</footer>



   </div>

)

}


export default CountdownTimer