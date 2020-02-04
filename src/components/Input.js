import React, { Component } from 'react'

export class Input extends Component 
{

    constructor(props) {
        super(props)
        this.inputReact = React.createRef();        
    }

    focusInput(){
        this.inputReact.current.focus();
    }


    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputReact}/>
            </div>
        )
    }
}

export default Input
