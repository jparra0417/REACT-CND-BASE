import React, { useState, useEffect } from 'react'

export default function HookEffectOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');


    const increment = () => {
        setCount(prevState => {
            return prevState + 1
        })
    }

    useEffect(() => {
        console.log("updating title")
        document.title = `Click ${count} timess`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={increment}>Clicked {count} times</button>
        </div>
    )
}
