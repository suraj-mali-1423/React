import React from 'react'

function ImageUploader(props) {
     const ShowImageUploaded  = (e) => {
           const file  = e.target.files[0];
          if(file) {
                props.UploadedHandler(file);
          }
          
          }
  return (
   <div className='flex  items-center justify-center mb-5'>
                   <label 
                     className=" w-64 h-44 text-sm text-gray-400 
                            border-2 border-dotted border-gray-400 rounded-lg cursor-pointer 
                            bg-gray-50 flex items-center justify-center 
                            hover:border-blue-500 transition"
                   >
                     <span>CLick + Upload Image</span>
                     <input type="file" accept="image/*" className="hidden" onChange={ShowImageUploaded} />
                   </label>
    </div>
  )
}

export default ImageUploader
