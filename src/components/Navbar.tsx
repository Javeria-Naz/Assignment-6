import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white'>
      <nav className='bg-gray-800 text-white h-17 py-2 px-3 flex justify-between items-center '>
        <img className='w-30 h-10' src="/pakwheels.png" alt="."/> 
        <div>New Cars</div>
        <div>Used Cars</div>
        <div>Bikes</div>
        <div>Autostore</div>
        <div>Videos</div>
        <div>Forums</div>
        <div>Blog</div>
        <div>More</div>
        <button className='bg-red-600 px-2 py-2 rounded-xl'>Post an Add</button>
    
      </nav>
    </div>

  )
}

export default Navbar
