import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import Course from './course/Course'
import { Route, Routes } from "react-router-dom"
import Signup from './componets/Signup'
import About from './componets/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
    </>
  )
}

export default App
