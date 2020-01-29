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
    
    render() {
        console.log('Lifecycle render')
        return (
            <div>
                <h1>Lifecycle A</h1>
                <LifecycleB />
            </div>
        )
    }
}

export default Lifecycle
