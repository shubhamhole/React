import React from 'react'

function MultipleConditionTerniary() {
    let num
  return (
    <div>{
      (num=10 || num<=7 && num===10) ?<h1>Statement is true</h1>:<h2>condition is false</h2>
    }
    </div>
  )
}

export default MultipleConditionTerniary
