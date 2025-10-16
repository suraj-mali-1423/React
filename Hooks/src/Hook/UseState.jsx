import React from 'react'

function UseState({Cnt , Setcnt}) {
    const Increment = (props) => {
       Setcnt (Cnt + 1);
   }
    
   const Decrement = () => {
       Setcnt (Cnt - 1);
   }
  return (
    <div className='w-full h-screen md:flex flex-col  items-center bg-slate-600 justify-center'>
         <h1 className=' text-2xl mb-6 font-bold'> Simple UseState  </h1>
         <div className=' flex flex-col items-center justify-evenly hover:shadow-2xl w-[30%] h-[40%] rounded-2xl bg-white'>
             <p className=' text-2xl font-bold '> {Cnt} </p>
             <div className=' flex gap-30 '>
               <button 
                 onClick={Increment}
               className=' bg-black  hover:shadow-2xl shadow-black font-bold text-white px-2 py-2 rounded-xl hover:scale-105'>Increase</button>
              <button
              onClick={Decrement}
              disabled ={Cnt <= 0}
              className=' bg-black hover:shadow-2xl shadow-black font-bold text-white px-2 py-2 rounded-xl hover:scale-105'>Decrese</button>
             </div>
         </div>
    </div>
  )
}

export default UseState
