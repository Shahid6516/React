import React from 'react'

const useEffect = () => {

    useEffect(() => {
        // side effect code goes here
        return () => {
            // clean up code (optional)
            // runs on component unmount or before re-runs
        }

    }, [
        // dependencies
    ])

    return (
        <div>
            <h3>Question 1: what is useEffect in React?</h3>
            <p>useEffect is a hook in functional components to perform side effect after rendering, such as data fetching, subscription or manual dom manipulation.</p>
        </div>
    )
}

export default useEffect