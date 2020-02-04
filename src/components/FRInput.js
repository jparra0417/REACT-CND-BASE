import React, { Component } from 'react'

// export class FRInput extends Component {
//     render() {
//         return (
//             <div>
//                 <input type="text"></input>
//             </div>
//         )
//     }
// }

const FRInput = React.forwardRef((props, ref) => {


    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default FRInput
