import React from 'react'

const State = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      {count}
    </div>
  )
}

export default State