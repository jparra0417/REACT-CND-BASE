import React, { Component } from 'react'

export class Column extends Component {
    render() {
        const items = [{ id: 1, title: "Name" }, { id: 2, title: "Email" }];
        return (
            <React.Fragment>
                {
                    items.map(item => (
                        <React.Fragment key={item.id}>
                            <td>
                                <h1>Title</h1>
                                <p>{item.title}</p>
                            </td>
                        </React.Fragment>
                    ))
                }
            </React.Fragment>
        )
    }
}

export default Column
