import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name : "Child"    
        }
    }
    


    render() {
        return (
            <div>
                <button onClick={() => this.props.greetHandler(this.state.name)}>Greet parent</button>   
            </div>
        )
    }
}

export default ChildComponent
