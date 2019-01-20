import React, { Component } from 'react'

class event extends Component {

    constructor(props) {
        super(props)

        this.state = {
            test: "testing"
        }


        this.events = this.events.bind(this)


    }
    event() {

        this.setState = {
            test: "another test"

        }
    }
}


render(){
    return (
        <div>
            <a href="" onClick={this.events}></a>
            <h1>{this.state.test}</h1>
        </div>
    )
}
}