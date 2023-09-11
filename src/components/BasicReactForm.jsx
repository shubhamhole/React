import React, { useState } from 'react'

function BasicReactForm() {
    const [name,setName]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        alert(`The name you have entered is ${name}`)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="submit"/>
        </form>
    </div>
  )
}

export default BasicReactForm
