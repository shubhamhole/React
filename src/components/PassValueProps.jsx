import React from 'react'
import Props from './Props'

function PassValueProps() {
    const name='Testing'
  return (
    <div>
      <h2>My name is <Props name={name}/></h2>
    </div>
  )
}

export default PassValueProps
