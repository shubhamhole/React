import React, { Component } from 'react'

export class Constructor extends Component {
    constructor(){
        super()
        this.state={faviourateColor:'red'}
        console.log('Constructor called')
    }
  render() {
    return (
      <div>
        <h1>My faviourate Colour :{this.state.faviourateColor}</h1>
      </div>
    )
  }
}

export default Constructor
