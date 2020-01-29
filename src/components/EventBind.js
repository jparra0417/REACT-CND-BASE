import React, { Component } from 'react'


export class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.setState((prevState) =>({
            message: prevState.message === "Good Bye" ? "Hello" : "Good Bye"
        }))
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
