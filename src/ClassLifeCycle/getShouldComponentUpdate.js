import React, { Component } from 'react'

class Counter1 extends Component {
    shouldComponentUpdate(nextProps) {
        console.log('Should Component Update')
        if (nextProps.value !== this.props.value) {
            return true
        }
        else {
            return false
        }
    }
    render() {
        console.log('Counter 2 is called')
        return (
            <div>
                <h2>Counter 2:</h2>
                <h3>{this.props.value}</h3>
                <button onClick={this.props.onClick}>Add</button>
            </div>
        )
    }
}


export default Counter1
