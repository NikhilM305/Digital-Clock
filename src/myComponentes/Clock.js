import React, { useState } from 'react'
import './Clock.css';
const Clock = () => {

 let time = new Date().toLocaleTimeString();
  const [currrentTime,setCurrentTime] = useState(time)

function updateTime(){
  let time = new Date().toLocaleTimeString();
  setCurrentTime(time)
}

setInterval(updateTime,1000)

  return (
    <div className='clock'>
        <h1>{currrentTime}</h1>
    </div>
  )
}

export default Clock