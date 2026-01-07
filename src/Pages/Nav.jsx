import React, { useState } from 'react'
import Home from './Home'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

const Nav = () => {

  const { theme, toggleTheme } = useTheme();


  return (
    <div className='h-10 py-10 w-1/2 mx-auto rounded-full mt-4 flex bg-amber-500 items-center justify-center'>
      <nav className='flex gap-9 text-3xl'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <button onClick={toggleTheme} className='ml-8 p-2 bg-red-600 rounded-full'>Switch</button>
    </div>
  )
}

export default Nav