import React from 'react'

function Props(props) {
  return (
    <div>
      {/* <h2>I am {props.name}</h2> */}
      <h3>My name is {props.student.name} and the course is {props.student.course}</h3>
    </div>
  )
}

export default Props
