import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {


        return this.state.isLoggedIn && <div>Welcome Julian</div>


        // return this.state.isLoggedIn ?
        //     (<div>Welcome Julian!</div>) :
        //     (<div>Welcome Guest!</div>)



        // let message
        // if (this.state.isLoggedIn)
        //     message = <div>Welcome Julian!</div>
        // else
        //     message = <div>Welcome Guest!</div>
        // return (<div>{message}</div>)


        // if (this.state.isLoggedIn)
        //     return (
        //         <div>
        //             <div>Welcome Julian!</div>             
        //         </div>
        //     )
        // else
        //     return (
        //         <div>                   
        //             <div>Welcome Guest!</div>
        //         </div>
        //     )


    }
}

export default UserGreeting
