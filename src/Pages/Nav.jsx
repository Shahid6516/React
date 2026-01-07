import React from 'react'
import Home from './Home'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className='h-10 py-10 w-1/2 mx-auto rounded-full mt-4 flex bg-amber-500 items-center justify-center'>
      <nav className='flex gap-9 text-3xl'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  )
}

export default Nav