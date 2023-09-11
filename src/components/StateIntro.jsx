import React, { Component } from 'react'

export default class StateIntro extends Component {
    constructor(props){
        super(props)
        this.state={
            brand:'Audi',
            model:'C6',
            color:'White',
            year:2021
        }
    }
     changeColour=()=>{
        this.setState({color:'red'})
    }
  render() {
    return (
      <div>
        <h1>My Car is {this.state.brand}</h1>
        <p>
            It is a {this.state.color} colour
            and model is {this.state.model} 
            from {this.state.year}
        </p>
        <button onClick={this.changeColour}>Change Colour</button>
      </div>
    )
  }
}
