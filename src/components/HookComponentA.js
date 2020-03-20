import React, { useContext } from 'react'
import { CountContext } from '../App'

export default function HookComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component a {countContext.countState}
            <div>
                <button onClick={() => { countContext.countDispatch('increment') }}>
                    Increment 
                </button>
                <button onClick={() => { countContext.countDispatch('decrement') }}>
                    Decrement
                </button>
                <button onClick={() => { countContext.countDispatch('reset') }}>
                    Reset
                </button>
            </div>
        </div>
    )
}
