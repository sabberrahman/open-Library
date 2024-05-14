import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import Course from './course/Course'
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './componets/Signup'
import About from './componets/About'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser]=useAuth();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Course/>: <Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
