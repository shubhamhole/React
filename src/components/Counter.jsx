import React, { useState } from 'react'

function Counter(props) {
   const [count,setCount]=useState(0)
  return (
    <div>
        <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Change Value</button><br></br>
      <input type="text" name="name" id="name" onKeyDown={()=>{alert("onKeyDown event works ")}} />
    </div>
  )
}

export default Counter
