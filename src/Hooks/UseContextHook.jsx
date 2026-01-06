import React from 'react'

const UseContextHook = () => {
    return (
        <div>
            <h1>UseContext Hook</h1>
            <h2>Question 1: What is useContext in React?</h2>
            <p>
                - Used to consume values (like data or functions) from a context created by createContext().
                - it allows functional components to access context values without prop drilling.
                - In scenarios where passing props thorugh multiple levels of components is impractical.
            </p>
        </div>
    )
}

export default UseContextHook