import React, { useState } from 'react'

export default function HookCounterThree() {

    const [state, setstate] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input type="text" placeholder="First Name"
                value={state.firstName}
                onChange={e => setstate({ ...state, firstName: e.target.value })} />
            <input type="text" placeholder="Last Name"
                value={state.lastName}
                onChange={e => setstate({ ...state, lastName: e.target.value })} />
            <h2>Your first name is {state.firstName}</h2>
            <h2>Your last name is {state.lastName}</h2>
            <h2>{JSON.stringify(state)}</h2>
        </form>
    )
}
