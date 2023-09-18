import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { favouriteColor:"red" }
        console.log('constructor called')
    }

    static getDerivedStateFromProps(props,state){
        return {favouriteColor:props.favcol}
        console.log('component update')
    }

    render() {
        return (
            <div>
                <h1>My favourite Colour {this.state.favouriteColor}</h1>
                {this.state.favouriteColor}
            </div>
        )
    }
}

export default Header