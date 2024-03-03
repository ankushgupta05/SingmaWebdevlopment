import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 bg-slate-800 text-white py-4'>
      <div className='logo font-bold'>Facebook</div>
      <ul className='flex pag-6'>
        <link href="/">Home</link>
        <link href="/about">About</link>
        <link href="contact">contact</link>
      </ul>
    </nav>
  )
}

export default Navbar
