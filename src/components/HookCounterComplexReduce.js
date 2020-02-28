import React, { useReducer } from 'react'

// define the initial state
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
// define the function of reducer that received as parameter
// the state and the action
const reducer = (state, action) => {
    // use a switch to determine what action was executed
    // we can add more data in the action like type, avalue
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function HookCounterComplexReduce() {
    // we implement the userreducer according to te reducer we defined outside the funtion and the initialstate
    // return the count that is the new state and a dispatch that allows to execute the code corresponding to a particular action  
    // dispatch allow us to send the action we want to execute
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            First count: {count.firstCounter} <br/>
            Second count: {count.secondCounter} <br/>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>2 Increment</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>2 Decrement</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>2 Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>2 Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default HookCounterComplexReduce