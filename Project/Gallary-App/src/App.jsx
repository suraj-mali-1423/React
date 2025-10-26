import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Gallary from './Components/Gallary'
import { useFormState } from 'react-dom'

function App() {
  const [userdata, setUserdata] = useState([])
  const [Page, setPage] = useState(1)

  const getData = async () => {
    const Response = await axios.get(`https://picsum.photos/v2/list?page=${Page}&limit=15`)
    setUserdata(Response.data)
    console.log(Response.data)
  }

  useEffect(() => {
    getData()
  }, [Page])

  let PrintData = (
    <h2 className="p-3 text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
      Loading...
    </h2>
  )

  if (userdata.length > 0) {
    PrintData = userdata.map((User, index) => (
      <div key={index}>
        <Gallary User = {User} />
      </div>
    ))
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="text-white flex py-6 flex-wrap gap-5 items-center justify-center px-4 min-h-[80vh]">
        {PrintData}
      </div>

      <div className="flex items-center text-center relative justify-center gap-20 p-10">
        <button
          onClick={() => {
            if (Page > 1) {
              setUserdata([])
              setPage(Page - 1)
            }
          }}
          disabled={Page <= 1}
          className="bg-white px-5 py-3 text-black active:scale-95 rounded-xl"
        >
          Prev
        </button>

        <p className="font-bold text-white">{Page}</p>

        <button
          onClick={() => {
            if (Page < 10) {
              setUserdata([])
              setPage(Page + 1)
            }
          }}
          className="bg-white px-5 py-3 text-black active:scale-95 rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
