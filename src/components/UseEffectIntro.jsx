import React, { useEffect, useState } from 'react'

function UseEffectIntro() {
    const [count,setCount]=useState(0)
    const [content,setContent]=useState('Test')

    useEffect(()=>{
        console.log("ComponentWillunmount")
    },[count])
  return (
    <div>
        <h2>{content}</h2>
        <button onClick={()=>{setContent('XYZ')}}>Change Content</button>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Inc.</button> &nbsp;&nbsp;&nbsp; 
      <button onClick={()=>{setCount(count-1)}}>Dec.</button>
    </div>
  )
}

export default UseEffectIntro
