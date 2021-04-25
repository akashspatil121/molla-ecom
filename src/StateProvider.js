import React, { createContext, useContext, useReducer  } from 'react'

// export const StateContext = createContext()

// export const StateProvider = StateContext.Provider

// export const StateConsumer = StateContext.Consumer


// Prepare Data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// pull data from data layer 
export const useStateValue = () => useContext(StateContext);