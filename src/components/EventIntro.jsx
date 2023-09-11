import React from 'react'

function EventIntro(props) {
    function changevalue() {
        document.getElementById('demo').innerHTML='How are you?'
    }
    const demo=()=>{
        alert('Welcome to Class')
    }
  return (
    <div>
      <h1 id='demo'>Hello Everyone</h1>
      <button onClick={changevalue}>Change Text</button>
      <button onClick={demo}>Fire</button>
    </div>
  )
}

export default EventIntro
