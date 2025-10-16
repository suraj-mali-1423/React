import React from 'react'

function event() {
     const OnClick =   () => {
         console.log("Heyy You Click To The Button....")
   }
   
   const OnMouseOver = () => {
       console.log(" Mouse Bhau On Me...")
   }

   const OnMoverOut = () => {
         console.log("Mouse Bhau Out....")
   }
   
   const OnKeyDown  = (e) => {
       console.log(e.key)
   }
   
   const OnChanage = (e) => {
      console.log(e.target.value)
   }
  return (
       <div className='w-full h-screen flex  flex-col items-center justify-center bg-slate-700 text-slate-500'>
           
           <input type="text" 
             placeholder='Enter the text here...'
             className=' border-2 boder-white font-bold text-xl mb-10 p-5 bg-white text-black rounded-xl hover:shadow-2xl w-[20%]'
              onChange={OnChanage}
             />
           
           <button
            className='bg-white text-black px-2 py-2 rounded-xl'
             onClick={OnClick}
             onMouseOver={OnMouseOver}
             onMouseOut={OnMoverOut}
            >Click Me</button>


            
    </div>
  )
}

export default e