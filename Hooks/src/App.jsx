import React, { useState } from 'react'
import UseState from './Hook/UseState';

function App() { 
   const [Cnt  , Setcnt] = useState(0);
   

  return (
    <div>
       <UseState Cnt = {Cnt} Setcnt = {Setcnt} />
    </div>
  )
}

export default App
