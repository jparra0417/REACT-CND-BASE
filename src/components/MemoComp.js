import React from 'react'

function MemoComp(props) {
    console.log("Memo component render")
    return (
        <div>
            Memo component {props.name}
        </div>
    )
}

export default React.memo(MemoComp)
