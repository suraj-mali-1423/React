import React, { useState } from 'react';
import LoginCard from './Components/LoginCard';

function App() {
  const [Form, setForm] = useState({
    image: '',
    username: '',
    description: ''
  });

  const [cards, setCards] = useState([]); // ✅ stores all submitted cards

  const OnSubmitted = (e) => { 
    e.preventDefault();

    // ✅ Add new card to list
    setCards([...cards, Form]);

    // ✅ Reset form fields
    setForm({
      image: '',
      username: '',
      description: ''
    });
  };

  return (
    <div>
      {/* Form Section */}
      <div className='flex items-center justify-center bg-slate-800 w-full h-screen'>
        <form  
          onSubmit={OnSubmitted}
          className='bg-white p-10 flex flex-col rounded-3xl hover:shadow-2xl transition duration-300 items-center justify-center'
        > 
          <input 
            required
            value={Form.image}
            onChange={(e) => setForm({ ...Form, image: e.target.value })}
            placeholder='Enter the Image URL...' 
            type="text" 
            className='text-black bg-slate-300 font-bold px-8 py-4 mb-4 rounded-2xl'
          /> 

          <input 
            required
            value={Form.username}
            onChange={(e) => setForm({ ...Form, username: e.target.value })}
            placeholder='Enter Your Name...' 
            type="text" 
            className='text-black bg-slate-300 font-bold px-8 py-4 mb-4 rounded-2xl'
          /> 

          <textarea 
            required
            value={Form.description}
            onChange={(e) => setForm({ ...Form, description: e.target.value })}
            placeholder='Enter the Description..' 
            className='text-black bg-slate-300 font-bold px-15 py-8 mb-4 rounded-2xl'
          /> 

          <button className='bg-blue-400 px-4 py-2 rounded-xl text-white font-bold hover:scale-105'>
            Submit
          </button>
        </form>
      </div>

      {/* ✅ Cards Section */}
      <div className='md:flex items-start flex-wrap w-[100%] min-h-screen bg-slate-100'>
        {cards.map((card, index) => (
          <LoginCard 
            key={index}
            UserName={card.username}
            Image={card.image}
            Description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
