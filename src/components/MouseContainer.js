import React, {useState} from 'react'
import HookMouse from './HookMouse'

export default function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <>
            <button onClick={e => setDisplay(!display)}>Toggle</button>
            {display && <HookMouse></HookMouse>}
        </>
    )
}
