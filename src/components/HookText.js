import React from 'react'

function HookText({ text, count }) {
    console.log(`HookText rendering ${text}`)
    return (
        <div>
            <strong>{text}</strong>: {count}
        </div>
    )
}

export default React.memo(HookText)
