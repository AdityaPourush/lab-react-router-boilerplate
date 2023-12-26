import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AllRoutes from './Components/Routes/AllRoutes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <AllRoutes/>
      </div>
    </>
  )
}

export default App
