import React from 'react'
const Hello = () => {
    /** With JSX */
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello everyone!</h1>
    //     </div>
    // )

    /** Without JSX */
    return React.createElement(
        'div'
        , {id: 'myDiv', className: 'dummyClass' }
        , React.createElement(
            'h1'
            , null
            , 'Welcome everyone!'
            )
        )
}

export default Hello