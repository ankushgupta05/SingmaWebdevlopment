import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <Footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
      <div className='flex-center'>Copyrigth Facebook | All rights reserved</div>
      <ul className='flex gap-2 text-sm'>
        <link href="/" className='text-xs'>Home</link>
        <link href="/about" className='text-xs'>About</link>
        <link href="/contact" className='text-xs'>Contact</link>
      </ul>
    </Footer>
  )
}

export default Footer
