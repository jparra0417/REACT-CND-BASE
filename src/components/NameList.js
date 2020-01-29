import React, { Component } from 'react'

class NameList extends Component {

    render() {
        const people = [
            { name: "Bruce", age: 32 }
            , { name: "Clark", age: 24 }
            , { name: "Goku", age: 24 }];
        const personList = people.map((person, index) => <h2 key={index}>I am {person.name} and I am {person.age} years old</h2>)
        return (
            <div>
                
                    {personList}
                
            </div>
        )
    }
}


export default NameList
