import React, { Component } from 'react'

export class FunctionClick extends Component {
    clickHandle() {
        console.log("Clicked!");
    }
    render() {
        return (
            <div>
                <button onClick={ this.clickHandle}>Click</button>
            </div>
        )
    }
}

export default FunctionClick
