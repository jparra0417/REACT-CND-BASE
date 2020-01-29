import React from 'react';

class Message extends React.Component {

    constructor() {
        super();
        this.state = {
            hello : 'hello',
            message: 'Welcome visitor'
        };
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        });
    }

    render() {

        return (
            <div>
                <h1>{this.state.message}</h1>
                <div>{this.state.hello}</div>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;