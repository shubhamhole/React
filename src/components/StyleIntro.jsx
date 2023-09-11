import React from 'react'
import './demo.css'

function StyleIntro() {
    const mystyle={
        color:'white',
        backgroundColor:'blue',
        fontSize:'50px'
    }
  return (
    <div>
      <h1 style={{color:"red"}}>Hello Everyone</h1>
        <h2 style={mystyle}>Seven Mentor</h2>
        <p>If the properties have two name like background-color it must be written in camel case syntax</p>
    </div>
  )
}

export default StyleIntro
