import React from 'react'
import useCutsomeHook from './UseCutsomeHook'

function UseCustomeHookImpl() {
    const clickedButton=useCutsomeHook(0,'UseCustomeHookImpl')
  return (
    <div>
      <h1>This is the first custome hook example</h1>
      <button onClick={clickedButton}>Click Here!</button>
    </div>
  )
}

export default UseCustomeHookImpl
