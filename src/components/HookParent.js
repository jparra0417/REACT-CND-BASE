import React, { useState, useCallback } from 'react'
import HookButton from './HookButton'
import HookText from './HookText'
import HookTitle from './HookTitle'

function HookParent() {
    const [age, setAge] = useState(27)
    const [salary, setSalary] = useState(8000)

    const incrementAge = useCallback(
        () => {
            setAge(age + 1)
        },
        [age],
    )

    const incrementSalary = useCallback(
        () => {
            setSalary(salary + 250)
        },
        [salary],
    )

    return (
        <div>
            <HookTitle></HookTitle>
            <HookText text="Age" count={age}></HookText>
            <HookButton handleClick={incrementAge}>Increment age</HookButton>
            <HookText text="Salary" count={salary}></HookText>
            <HookButton handleClick={incrementSalary} >Increment salary</HookButton>
        </div>
    )
}

export default HookParent


