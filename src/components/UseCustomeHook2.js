import React from 'react'
import useCutsomeHook from './UseCutsomeHook'

function UseCustomeHook2() {
    const clickedButton=useCutsomeHook(0,'UseCustomeHook2')
  return (
    <div>
      <h1>This is second custome Hook example</h1>
      <button onClick={clickedButton}>Click Here</button>
    </div>
  )
}

export default UseCustomeHook2
