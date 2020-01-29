import React, { Component } from 'react'

export class Inline extends Component {
    heading = {
        fontSize : '32px',
        color : 'blue'
    }
    render() {
        return (
            <div>
                <h1 style={this.heading}>Inline</h1>
            </div>
        )
    }
}

export default Inline
