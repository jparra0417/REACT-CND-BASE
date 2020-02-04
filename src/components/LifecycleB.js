import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Julian'
        }

        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <h1>Lifecycle B</h1>     
            </div>
        )
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }
}

export default LifecycleB
