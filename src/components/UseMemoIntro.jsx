import React, { useMemo, useState } from 'react'

function UseMemoIntro() {
    const [number,setNumber]=useState(0)


    const squaredNum=useMemo(()=>{
        return SquaredNum(number)
    },[number])

    function SquaredNum(number){
        console.log("Squared will be done")
        return Math.pow(number,2)
    }

    const [counter,setCounter]=useState(0)

    const onChangeHandler=(e)=>{
        setNumber(e.target.value)
    }
    const countHandler=()=>{
        setCounter(counter+1)
    }
  return (
    <div>
      <h1>Welcome</h1>
      <input type={'number'} value={number} onChange={onChangeHandler}/>
      <div>OUTPUT:{squaredNum}</div>
      <button onClick={countHandler}>Counter ++</button>
      <div>Counter: {counter}</div>
    </div>
  )
}



export default UseMemoIntro
