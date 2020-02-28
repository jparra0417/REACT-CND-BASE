import React from 'react'

function HookButton({handleClick, children}) {
    console.log(`HookButton rendering ${children}`)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(HookButton)
