import React, { useState } from 'react'
import NotesCard from './Components/NotesCard'
import LoginForm from './Components/LoginForm'

function App() {
    const [Form  , setForm] = useState({
       Main : "",
       Description : ""
    });
    
    const [ Card , setCard] = useState([])

  const OnSubmite = (e) => {
       e.preventDefault();
       setCard([...Card , Form])

       setForm({...Form , Main:"" , Description:""})
       console.log(Card);
  }
  return (
    <form onSubmit={OnSubmite} className='w-full h-screen p-4 lg:flex justify-evenly items-start'>
      
      <LoginForm Form = {Form} setForm = {setForm} />

      <NotesCard Card={Card} setCard = {setCard}/>  
    </form>
  )
}

export default App 
