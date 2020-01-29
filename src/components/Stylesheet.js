import React, { PureComponent } from 'react'
import './myStyles.css'
import styles from './appStyles.module.css'
export default class Stylesheet extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {        
        return (
            <div>
                <h1 className="primary font-xl">Stylesheet</h1>
                <h2 className={styles.success}>Module</h2>
            </div>
        )
    }
}
