import React, { useEffect, useRef, useState } from 'react'

// function UseReference() {
//     const [inputValue,setInputValue]=useState('')
//     const count=useRef(0)

//     useEffect(()=>{
//         count.current+=1;
//     })
//   return (
//     <>
//       <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
//       <h1>Render Count:{count.current}</h1>
//     </>
//   )
// }

// function UseReference(){
//     const inputElement=useRef()

//     const handleOnFocus=()=>{
//         inputElement.current.focus()
//     }
//     return(
//         <>
//         <input type="text" ref={inputElement}/>
//         <button onClick={handleOnFocus}>Focus Button</button>
//         </>
//     )
// }

function UseReference(){
    const [inputValue,setInputValue]=useState('')
    const previousinputvalue=useRef('')

    useEffect(()=>{
        previousinputvalue.current=inputValue
    },[inputValue])
    return(
        <>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <h2>CurrentValue: {inputValue}</h2>
        <h2>PreviousValue: {previousinputvalue.current}</h2>
        </>
    )
}
export default UseReference
