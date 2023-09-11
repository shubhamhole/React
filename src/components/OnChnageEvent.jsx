import React, { useState } from 'react'
import './demo.css'
function OnChnageEvent() {
    const [name,setName]=useState('')
  return (
    <div>
      {/* <input type="text" value={name} onChange={(e)=>{console.log(e.target.value)}}/> */}
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
     <p>Input value is:  {name} </p>
    </div>
  )
}

export default OnChnageEvent
