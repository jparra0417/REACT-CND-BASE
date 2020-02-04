import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    
    constructor(props) {
        super(props)

        this.state =  {
            name: 'Julian'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Julian"
            })
        }, 2000)
    }

    render() {
        console.log("ParentComp render")
        return (
            <div>
                Parent component
                <MemoComp name={this.state.name}></MemoComp>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
