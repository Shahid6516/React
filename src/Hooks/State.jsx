import React from 'react'

const State = () => {
  const [count, setCount] = React.useState(0)
  const [value, setValue] = React.useState("")
  const [userData, setUserData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const HandleInputChange = () => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value })
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <h2>{value}</h2>
      <input type="text" onChange={(e) => setValue(e.target.value)} />

      <div>
        <h1>Build a form containing First Name , last name and email. use only state to manage all fields.</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(userData)
        }}>
          <input placeholder='First Name' type='text' name='firstName' onChange={HandleInputChange} />
          <input placeholder='Last Name' type='text' name='lastName' onChange={HandleInputChange} />
          <input placeholder='Email' type='email' name='email' onChange={HandleInputChange} />
          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default State