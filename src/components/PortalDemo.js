import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                Portals demo
            </div>,
            document.getElementById("portal-root")
        )
    }
}

export default PortalDemo
