import React, { useState } from 'react'

function UseStateIntro() {
    const [count,setCount]=useState(0)
  return (
    <div>        
      {/* <button onClick={()=>setCount(count+1)}>+</button>{count}<button onClick={()=>setCount(count-1)}>-</button> */}
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>{count}<button onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
    </div>
  )
}

export default UseStateIntro
