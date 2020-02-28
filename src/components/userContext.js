import React from 'react'

// create the context
const UserContext = React.createContext();

// define the provider
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

export default  UserContext
