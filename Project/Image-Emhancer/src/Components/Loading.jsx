import React from 'react'

function Loading() {
  return (
     <div className="flex items-center justify-center h-64 bg-gray-100">
            <div className="relative flex items-center justify-center">
              <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="absolute text-sm text-gray-600 font-medium mt-20">Loading...</span>
            </div>
     </div>
  )
}

export default Loading
