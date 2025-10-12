import React from 'react'

function Card(props) {
  
  return (
    <div className=' p-10 w-100 h-100 text-center flex flex-col items-center justify-center bg-slate-100 text-xl shadow-slate-600 hover:shadow-lg transition-shadow duration-300 text-black m-10  rounded-4xl'>
             <img className=' w-40 h-40 object-cover rounded-full mb-3' src = {props.Image}/>
            <h1 className=' text-xl mb-1'>{props.Name}</h1>
            <p>{props.Para}</p>
    </div>
  )
}

export default Card
