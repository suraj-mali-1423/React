import React from 'react'
import {Pencil} from 'lucide-react'
function NotesCard({ Card ,setCard }) {
   


  return (
    <div className='w-full lg:w-1/2 max-h-[80vh] overflow-y-auto flex flex-wrap justify-center overflow-hidden gap-6 p-6'>
      {Card.map((note, index) => (
        <div
          key={index}
          className='w-[45%] mb-2 min-w-[250px] bg-amber-600 border border-gray-300 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300'
        > 
          <h1 className='font-bold text-md mb-2'>{note.Main}</h1>
          <p className='text-md mb-2'>{note.Description}</p>
          <button className='p-1 bg-white font-bold rounded hover:scale-105' onClick={(e) =>{
             const UpdateCard= Card.filter((_, i) => i !== index);
                setCard(UpdateCard);
          }}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default NotesCard
