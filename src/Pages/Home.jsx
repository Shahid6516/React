import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div className='p-10'>
      {/* <Nav/> */}
      <h1 className='text-blue-700'>🏠 Home Page</h1>
      <h3 className='text-3xl tracking-lighter mt-4'>Hero Section
        Welcome to our digital space where ideas turn into reality. We help individuals and businesses build meaningful online experiences through smart design and powerful technology.

        <br/>
          Why Choose Us

       <br/>
        We focus on simplicity, performance, and results. Every project is crafted with attention to detail, ensuring your brand stands out in a crowded digital world.
<br />
        What We Do
        <br />
        From web development to creative solutions, we deliver products that are fast, scalable, and user-friendly. Our goal is to help you grow with confidence.
<br />
        Call to Action
        <br />
        Let’s build something amazing together. Get in touch today and start your journey toward success.</h3>
    </div>
  )
}

export default Home