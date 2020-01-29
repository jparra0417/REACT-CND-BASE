import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handlerUsernameChange = event => {
        this.setState({ username: event.target.value })
    }

    handlerCommentsChange = event => {
        this.setState({ comments: event.target.value })
    }

    handlerTopicChange = event => {
        this.setState({ topic: event.target.value })
    }

    handlerSubmit = event => {
        event.preventDefault();
        alert(`username ${this.state.username} - comment ${this.state.comments} - topic ${this.state.topic}`)
    }

    render() {
        const {username, comments, topic} = this.state;
        return (
            <form onSubmit={this.handlerSubmit}>
                <label>Username</label>
                <input type="text" value={username} onChange={this.handlerUsernameChange} />
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handlerCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handlerTopicChange}>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                        <option value="react">React</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
