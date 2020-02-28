import React from 'react'

export default function HookIntervalCounter() {
    const [count, setCount] = React.useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }

    React.useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])



    return (
        <h1>
            {count}
        </h1>
    )
}
