import React, { useReducer } from 'react'

// define the initial state
const initialState = 0;
// define the function of reducer that received as parameter
// the state and the action
const reducer = (state, action) => {
    // use a switch to determine what action was executed
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function HookCounterReduce() {
    // we implement the userreducer according to te reducer we defined outside the funtion and the initialstate
    // return the count that is the new state and a dispatch that allows to execute the code corresponding to a particular action  
    // dispatch allow us to send the action we want to execute
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {count}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default HookCounterReduce
