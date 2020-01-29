import React from 'react';

function Greet(props) {
    return (
        <div> 
            <h1>{props.name}, welcome to CND</h1>
            {props.children}
        </div>
    )
}
export default Greet;
