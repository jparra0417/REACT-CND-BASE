import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Julian'
        }

        console.log('Lifecycle constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log("Lifecycle componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Lifecycle shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Lifecycle getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("Lifecycle componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "CND"
        })
    }
    
    render() {
        console.log('Lifecycle render')
        return (
            <div>
                <h1>Lifecycle A</h1>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default Lifecycle
