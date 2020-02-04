import React, { Component } from 'react'
import Column from './Column'

export class Table extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                       <Column></Column> 
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table
