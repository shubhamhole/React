import React from 'react'
import Home from './Home'
import TerniaryOperator from './TerniaryOperator'

function NestedTerniaryOperator(props) {
    let islogin=true
  return (
    <div>
      {
        islogin===false? <Home/> : <TerniaryOperator/>===true ? <h1>Loaded</h1> : <p>LogOut</p>
      }
    </div>
  )
}

export default NestedTerniaryOperator
