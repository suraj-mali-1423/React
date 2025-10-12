import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/NANA/Navbar.jsx'
function App() {
  return (
    <div className=' w-full' > 
            <Navbar />
            <div className=' md:flex   flex-wrap items-center'>
               <Card Image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/500px-Virat_Kohli_in_PMO_New_Delhi.jpg" Name="Virat Kohali"  Para="Kohli has received many accolades for his performances in cricket. He won the ICC ODI Player of the Year award four times in 2012, 2017, 2018, and 2023. "/>
            <Card Image="https://imgs.search.brave.com/bWh8D91W-inoBnJJlHVQRh9eavh3gRU2n8Q4cZXPzZ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2Q1L01T/X0Rob25pXyUyOFBy/YWJoYXZfJTI3MjNf/LV9SaUdJXzIwMjMl/MjkuanBnLzUxMnB4/LU1TX0Rob25pXyUy/OFByYWJoYXZfJTI3/MjNfLV9SaUdJXzIw/MjMlMjkuanBn" Name="Ms Dhoni"  Para="Born in Ranchi, Dhoni made his first class debut for Bihar in 1999. He made his debut for the Indian "/>
            <Card Image="https://imgs.search.brave.com/rIELz_40wdZ29xuDOtkXWbkzPeDlrxVJ0ucf7ZoA_bw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/amFncmFuaW1hZ2Vz/LmNvbS9pbWFnZXMv/bmV3aW1nLzA4MTAy/MDI1LzA4XzEwXzIw/MjUtcm9oaXRfc2hh/cm1hX29kaV9jYXB0/YWluY3lfc251Yl8y/NDA3NDI2My53ZWJw" Name="Rohit Sharma"  Para="Sharma holds several batting records which include most runs in T20 Internationals, "/>
            </div>
    </div>
  )
}

export default App;
