import React, { Component } from 'react'

export default class ExtendsPropsValue extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.demoProp}</h2>
      </div>
    )
  }
}
