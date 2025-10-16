import React from 'react'

function LoginForm({
     Form ,
     setForm
}) {
    
  return (
      <div className="m-10 p-10 flex lg:w-1/2 flex-col items-start gap-5 
                      rounded-2xl bg-slate-200   border-black 
                      shadow-xl shadow-gray-500/40 
                      hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
         <input 
         required
        value={Form.Main}
        onChange={(e) => setForm({ ...Form, Main: e.target.value })}
        type="text"  
        placeholder="Enter the Main Point..."
        className="px-8 py-3 lg:w-full rounded-xl border border-gray-400 
                   focus:outline-none focus:ring-0 focus:border-transparent font-bold"
      />

      <textarea 
      required
        value={Form.Description}
        onChange={(e) => setForm({ ...Form, Description: e.target.value })}
        placeholder="Enter the Point Description..."
        className="px-11 py-10 lg:w-full rounded-xl border border-gray-400 
                   focus:outline-none focus:ring-0 focus:border-transparent font-bold"
      />

      <button 
        type="submit"
        className="bg-blue-800 px-2 py-2 rounded-xl hover:scale-105 text-white font-bold"
      >
        Add Note
      </button>
      </div>
  )
}

export default LoginForm
