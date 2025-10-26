import React from 'react'
import Loading from './Loading'

function ImagePreview({  loading , uploaded, enhanced  }) {
  return (
    <div className="grid mb-7 grid-cols-1 md:grid-cols-2 gap-6 lg:w-full m-5 text-center max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-amber-400 to-green-300 text-black py-4">
          Original Image
        </h2>
        {uploaded ? (
          <img
            src={uploaded}
            className="w-full h-auto object-contain"
            alt="Original"
          />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-600">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-green-300 to-amber-400 text-black   py-4">
          Enhanced Image
        </h2>
          
          {enhanced && !loading && (
                <img
                  src={enhanced}
                  className="w-full h-auto object-contain"
                  alt="Enhanced"
                />
          ) }
          
          {
             loading ? <Loading /> : (<div className="flex items-center justify-center h-64 bg-gray-200 text-gray-600">
            No Enhanced Image
          </div>)
          }

     
      </div>
    </div>
  )
}

export default ImagePreview
