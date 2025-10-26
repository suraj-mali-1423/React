import React from 'react'
import Home from './Components/Home'
import ImageUploader from './Components/ImageUploader'

function App() {
  return (
    <div className='lg:flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-blue-400 py-8 px-4 '>
            {/*  Header */}
            <div className='text-center mb-8 flex flex-col items-center justify-center'>
                 <h1 className=' text-blue-600 mb-5 font-bold text-5xl'> AI Image Enhancer </h1>
                  <p className=' font-bold text-slate-600 mb-4 text-center'>Powered by Suraj Mali</p>
                 
            </div>
            
            <Home />

            {/* Footer */}

            <div className=' text-center font-bold text-xl text-gray-900'>
                Upload your image and let AI enhance to in second
            </div>
             
    </div>
  )
}

export default App
