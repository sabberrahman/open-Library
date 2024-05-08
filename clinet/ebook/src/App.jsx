import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import Course from './componets/Course'
import { Route, Routes } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
      </Routes>
    </>
  )
}

export default App
