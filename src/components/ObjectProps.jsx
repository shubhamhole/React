import React from 'react'
import Props from './Props'

function ObjectProps() {
    const stdInf={
        name:'Testing1',
        course:'React',
        empId:121
    }
  return (
    <div>
      <h3>Object Information:</h3>
      <Props student={stdInf}/>
    </div>
  )
}

export default ObjectProps
