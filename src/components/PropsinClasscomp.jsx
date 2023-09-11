import React, { Component } from 'react'
import ExtendsPropsValue from './ExtendsPropsValue'

export default class PropsinClasscomp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Node'
        }
    }
  render() {
    return (
      <div>
        {/* <h1>Welcome to {this.props.class}</h1> */}
        <ExtendsPropsValue demoProp={this.state.name}/>
      </div>
    )
  }
}
