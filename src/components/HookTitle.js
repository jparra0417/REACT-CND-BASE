import React from 'react'

function HookTitle() {
    console.log("HookTitle rendering ")
    return (
        <h1>
            Hooks
        </h1>
    )
}

export default React.memo(HookTitle)
