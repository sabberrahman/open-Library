import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import Banner from './componets/Banner'
import Footer from './componets/Footer'
import FreeBook from './componets/FreeBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <FreeBook/>
      <Footer/>
    </>
  )
}

export default App
