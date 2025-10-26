import React from 'react'
import axios from 'axios'
function App() {
  const getData = async() => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
          console.log(data)
  }   
  return (
    <div className=' m-10'>
       <button
        onClick={getData}
       className=' bg-slate-800 text-white font-bold p-4 rounded'>Gert Data</button>
    </div> 
  )
}

export default App
