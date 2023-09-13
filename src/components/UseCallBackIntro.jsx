import React, { useCallback, useState } from 'react'

var funCount=new Set()

function UseCallBackIntro() {
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(0)

    const incrementcount=useCallback(()=>{
        setCount(count+1)
    },[count])
    const decrementcount=useCallback(()=>{
        setCount(count-1)
    },[count])
    const incrementnumber=useCallback(()=>{
        setNumber(number+1)
    },[number])


    funCount.add(incrementcount)
    funCount.add(decrementcount)
    funCount.add(incrementnumber)

    alert(funCount.size)
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={incrementcount}>Increment</button>
      <button onClick={decrementcount}>Decrement</button>
      <h1>Number: {number}</h1>
      <button onClick={incrementnumber}>Increment Number</button>
    </div>
  )
}

export default UseCallBackIntro
