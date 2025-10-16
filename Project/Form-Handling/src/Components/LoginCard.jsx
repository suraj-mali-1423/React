import React from 'react'

function LoginCard({
    UserName ,
    Image , 
    Description
}) {
  return (
    <div className=' flex flex-col shrink-0 bg-slate-200 m-10 items-center border-2 border-slate-600 rounded-2xl justify-evenly ]   p-10'>
        <div></div>
         <img 
         className=' w-30 h-30 object-cover rounded-full'
         src={Image} />

         <div className=' shrink-0 mt-3 flex  flex-col text-center'>
             <h2 className=' font-bold text-xl mb-2'> {UserName}</h2>
              <p className=' text-md font-bold p-2 text-slate-700'>{Description}</p>
         </div>
    </div>
  )
}

export default LoginCard
