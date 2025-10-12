import React from 'react'

function Navbar() {
  return (
    <div className=' w-full h-auto flex items-center justify-between px-10 bg-blue-500 text-black'>
        <h2 className=' text-2xl font-bold'>NavBapu</h2>

       
            <div className=' flex items-center p-3 m-1 gap-7 text-xl font-bold'>
                <div className=' hover:border-b-2 border-black transition duration-300'>Home</div>
                <div className=' hover:border-b-2 border-black transition duration-300'>Contact</div>
                <div className=' hover:border-b-2 border-black transition duration-300'>Services</div>
                <div className=' hover:border-b-2 border-black transition duration-300'>About</div>
                <button className=' px-1 py-2 bg-white text-black rounded'>login</button>
            </div>
        
    </div>
  )
}

export default Navbar
