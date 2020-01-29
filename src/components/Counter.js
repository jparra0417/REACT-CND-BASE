import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment() {
        // this is not the way :(
        // this.state.count = this.state.count +1;

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("Callback value", this.state.count);
        // });

        // dont use the current state, use the prev state
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () =>{
            console.log("Callback value", this.state.count);
        });
        
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }


    render() {
        return (
            <div>
                 Count = {this.state.count}   
                 <div><button onClick={()=> this.incrementFive() } >Increment</button></div>
            </div>
        )
    }
}

export default Counter
