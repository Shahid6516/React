import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        // side effect code goes here
        return () => {
            // clean up code (optional)
            // runs on component unmount or before re-runs
        }
    }, [
        // dependencies
    ])

    const fetchUser = async () => {
        const resoponce = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random")
        const data = await resoponce.json()
        setUser(data)
        console.log(data)
        // console.log(data[0].name)

    }
    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div>
            <h3>Question 1: what is useEffect in React?</h3>

            <p>useEffect is a hook in functional components to perform side effect after rendering, such as data fetching, subscription or manual dom manipulation.</p>

            <h3>Question 2: Why is dependency array used in useEffect?</h3>
            <p>
                - When it empty it runs only once
                - when these values inside it change, the effect is re-run.
                - if removed, the effect runs after every render.

                - Handling dependencies ensures that the effect runs only when necessary and prevents unnecessary re-execution of the effect, optimizing performance and avoiding potential bug.
            </p>
            <h3>Question 3: Example of useEffect for data fetching.</h3>
            <span>Name: {user?.data?.name?.first} {user?.data?.name?.last} </span>
        </div>
    )
}

export default UseEffectHook