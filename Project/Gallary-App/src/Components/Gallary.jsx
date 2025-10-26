import React from 'react'

function Gallary({User}) {
  return (
    <div>
        <a href={User.url} target="_blank" rel="noopener noreferrer">
          <div className="h-36 w-44 bg-white rounded-xl overflow-hidden">
            <img src={User.download_url} className="h-full w-full object-cover" alt={User.author} />
          </div>
          <h2 className="font-bold mt-3 text-white text-center">{User.author}</h2>
         </a>
    </div>
  )
}

export default Gallary
  